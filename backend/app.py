from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from simulation import DialogueSimulator, DialogueAgent
from utils import process_simulation_input, summarize_message, get_recipe
from openai import OpenAI

load_dotenv()
app = Flask(__name__)
CORS(app)

simulator = None
iteration = 0
client = OpenAI()

@app.route('/api/create-sim', methods=['POST'])
def create_sim():
    global iteration
    iteration = 0
    data = request.json
    chef = data.get('chefs', [])
    custom = data.get('custom', None)
    global simulator
    simulator = process_simulation_input(chef, custom)
    return jsonify({"status": "Simulation processed"}), 200

end_iteration = 8
last_message = ""
@app.route('/api/sim-step', methods=['GET'])
def sim_step():
    global iteration
    name, message = simulator.step()
    iteration += 1
    global last_message
    last_message = message
    return jsonify({"is_last": iteration >= end_iteration, "name": name, "text": message}), 200

@app.route('/api/final', methods=['GET'])
def final():
    summarized_message = summarize_message(last_message)
    recipe = get_recipe(summarized_message)
    image = client.images.generate(
        model="dall-e-3",
        prompt=f'A realistic food picture described by: {summarized_message}',
        size="1024x1024",
        quality="standard",
        n=1,
    )
    return jsonify({"summarized_message": summarized_message, "image": image.data[0].url, "recipe":recipe}), 200

@app.route('/', methods=['GET'])
def index():
    return "Welcome!"

if __name__ == '__main__':
    app.run(port=5000, debug=True)
