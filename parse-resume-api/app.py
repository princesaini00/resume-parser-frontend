from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Load env vars
load_dotenv()

# Import blueprints
from filter_api import filter_api_blueprint
from resume_parser_api import resume_parser_blueprint

app = Flask(__name__)

# Configure CORS to allow requests from your Vercel domain
CORS(app, origins=[
    os.environ.get("FRONTEND_URL", "http://localhost:3000"),
    "https://your-vercel-app.vercel.app"  # Add your Vercel domain here
])


# Register blueprints
app.register_blueprint(filter_api_blueprint)
app.register_blueprint(resume_parser_blueprint)

@app.route('/')
def index():
    return {"status": "Flask API is running"}

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=int(os.environ.get("PORT", 5000)))





