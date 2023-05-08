echo "Installing requirements..."
pip install -r requirements.txt
echo "Done"

echo "Starting transalte API server..."
python -m setup -d true
echo "Done"

echo "Starting server..."
node app.mjs
