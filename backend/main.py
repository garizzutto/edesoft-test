# Aplicacao lambda para ler um arquivo csv e inserir no banco de dados postegres

import csv
import json

import boto3
import psycopg2


def lambda_handler(event, context):
    client = boto3.client('s3')
    response = client.get_object(Bucket=event['bucket_name'], Key=event['object_key'])
    data = response['Body'].read().decode('utf-8').splitlines()
    lines = csv.reader(data)
    headers = next(lines)
    print('headers: %s' %(headers))
    # Connect to postgres and insert data
    conn = psycopg2.connect(host=event['host'], database=event['database'], user=event['user'], password=event['password'])
    for line in lines:
        print('line: %s' %(line))
        #TODO: transform data to correct types (date, int, float, etc)
        cur = conn.cursor()
        cur.execute("INSERT INTO %s (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)" %(event['table'], headers[0], headers[1], headers[2], headers[3], headers[4], headers[5], headers[6], headers[7], headers[8], headers[9], headers[10], headers[11], line[0], line[1], line[2], line[3], line[4], line[5], line[6], line[7], line[8], line[9], line[10], line[11]))
        conn.commit()
        cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'body': json.dumps('File imported successfully!')
    }

if __name__ == '__main__':
    event = {
        'bucket_name': 'bucket-name',
        'object_key': 'object-key',
        'host': 'host',
        'database': 'database',
        'user': 'user',
        'password': 'password',
        'table': 'table'
    }
    lambda_handler(event, None)
  
