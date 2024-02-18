import requests
from flask import Flask, request, jsonify
from pprint import pprint

app = Flask(__name__)

# all this does is simulate the next action.
@app.route('/simulate_next', methods=['GET'])
def fetch_emails():
  return jsonify({'hello': 'world'}), 200

if __name__ == '__main__':
  app.run(port=5000, debug=True)