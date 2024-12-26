"""
@author  Joseph Adogeri
@since   12-DEC-2024
@version 1.0   

"""

import sys 
from os.path import dirname, abspath
dir = dirname(dirname(abspath(__file__)))
sys.path.append(dir)
from app import *  
from flask import Flask, request, jsonify
from database.functions.fetchRecords import *
from database.functions.updateRecord import *



'''


@app.route('/post_data', methods=['POST'])
def handle_post():
    data = request.get_json()  # Get the JSON data from the request body

    if not data:
        return jsonify({"error": "No JSON data provided"}), 400

    # Process the data
    name = data.get('name')
    age = data.get('age')

    return jsonify({"message": f"Received data: name={name}, age={age}"})

if __name__ == '__main__':
    app.run(debug=True)

'''

@app.route('/api/records', methods=['GET'])
def get_records():
    try:
        records = fetchRecords();


        return jsonify({"data": records})

    except Exception as e:
        print(e)
        return "Invalid data in query string", 400

@app.route('/api/records', methods=['PUT'])
def put_records():
    data = request.get_json()  # Get the JSON data from the request body

    if not data:
        return jsonify({"error": "No JSON data provided"}), 400

    # Process the data
    print("processing data === ",data)
    
    service_name = data["service_name"]

    updateRecord(service_name);
    return jsonify({"message": f"Received data {data}"})

'''
@app.route('/items', methods=['GET'])
def get_items():
    return "Getting all items"

@app.route('/items/<int:item_id>', methods=['GET'])
def get_item(item_id):
    return f"Getting item {item_id}"

@app.route('/items', methods=['POST'])
def create_item():
    return "Creating a new item"

@app.route('/items/<int:item_id>', methods=['PUT'])
def update_item(item_id):
    return f"Updating item {item_id}"

@app.route('/items/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    return f"Deleting item {item_id}"

''' 
