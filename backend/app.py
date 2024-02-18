from flask import Flask, request, jsonify
from dotenv import load_dotenv
from simulation import DialogueSimulator, DialogueAgent
from utils import process_simulation_input

load_dotenv()
app = Flask(__name__)

simulator = None
iteration = 0

@app.route('/api/create-sim', methods=['POST'])
def create_sim():
    global iteration
    iteration = 0
    data = request.json
    chief = data.get('chief', [])
    custom = data.get('custom', None)
    global simulator
    simulator = process_simulation_input(chief, custom)
    return jsonify({"status": "Simulation processed"}), 200

iteration = 0
end_iteration = 10
@app.route('/api/sim-step', methods=['GET'])
def sim_step():
    name, message = simulator.step()
    iteration += 1
    return jsonify({"last_message": iteration < end_iteration, "name": name, "message": message}), 200



@app.route('/', methods=['GET'])
def index():
    return "Welcome!"

if __name__ == '__main__':
    app.run(debug=True)
