import mimetypes
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')


from flask import Flask, render_template
from secrets import token_urlsafe


app = Flask(__name__)
app.config['SECRET_KEY'] = token_urlsafe(16)


@app.route("/", methods=["GET"])
def index():
    return render_template( "index.html" )


if __name__ == '__main__':
    app.run( debug=True )
