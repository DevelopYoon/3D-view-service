from flask import Flask, render_template, send_from_directory, abort
import os

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')

# Serve images from the vendor directory
@app.route('/static/vendor/img/<path:filename>')
def serve_vendor(filename):
    try:
        return send_from_directory(os.path.join('static', 'vendor', 'img'), filename)
    except FileNotFoundError:
        abort(404)

@app.route('/static/js/<path:filename>')
def serve_js(filename):
    return send_from_directory('static/js', filename)

@app.route('/static/img/<path:filename>')
def serve_images(filename):
    try:
        return send_from_directory('static/img', filename)
    except FileNotFoundError:
        abort(404)

# Serve images from the tiles directory
@app.route('/tiles/<path:filename>')
def serve_tiles(filename):
    try:
        return send_from_directory('tiles', filename)
    except FileNotFoundError:
        abort(404)

@app.route('/main')
def main_page():
    return render_template('main.html')

@app.route('/manage')
def manage_page():
    return render_template('manage.html')

@app.route('/3d_tour')
def tour_page():
    return render_template('3d_tour.html')

@app.route('/about')
def about_page():
    return render_template('about.html')

@app.route('/3d_nochun')
def nochun():
    return render_template('3d_nochun.html')

@app.route('/3d_parking')
def parking():
    return render_template('3d_parking.html')

@app.route('/3d_memorialHall')
def memorialHall():
    return render_template('3d_memorialHall.html')

@app.route('/3d_historyMuseum')
def historyMuseum():
    return render_template('3d_historyMuseum.html')

@app.route('/contact')
def contact_page():
    return render_template('contact.html')

@app.route('/404')
def notfound_page():
    return render_template('404.html')

@app.route('/list')
def list_page():
    return render_template('list.html')

@app.route('/list_attraction')
def attraction_page():
    return render_template('list_attraction.html')

@app.route('/list_campus')
def campus_page():
    return render_template('list_campus.html')

@app.route('/3d_museum')
def campus_museum_page():
    return render_template('3d_museum.html')

@app.route('/3d_playground')
def campus_playground_page():
    return render_template('3d_playground.html')

@app.route('/list_public')
def public_page():
    return render_template('list_public.html')

@app.route('/list_campus_jukjeon')
def list_campus_jukjeon():
    return render_template('list_campus_jukjeon.html')

@app.route('/3d_socialscience')
def social_science():
    return render_template('3d_socialscience.html')

@app.route('/3d_engineering1')
def engineering1():
    return render_template('3d_engineering1.html')
@app.route('/3d_engineering2')
def engineering2():
    return render_template('3d_engineering2.html')
@app.route('/3d_engineering3')
def engineering3():
    return render_template('3d_engineering3.html')

@app.route('/3d_glocal')
def glocal():
    return render_template('3d_glocal.html')

@app.route('/3d_international')
def international():
    return render_template('3d_international.html')

@app.route('/3d_hyedang')
def hyedang():
    return render_template('3d_hyedang.html')

@app.route('/3d_pond')
def pond():
    return render_template('3d_pond.html')

@app.route('/3d_multi')
def multi():
    return render_template('3d_multi.html')

@app.route('/3d_library')
def library():
    return render_template('3d_library.html')

@app.route('/3d_inmun')
def inmun():
    return render_template('3d_inmun.html')

@app.route('/3d_law')
def law():
    return render_template('3d_law.html')


@app.route('/3d_art')
def art():
    return render_template('3d_art.html')

@app.route('/3d_gym')
def gym():
    return render_template('3d_gym.html')

@app.route('/3d_jip')
def jip():
    return render_template('3d_jip.html')

@app.route('/3d_dance')
def dance():
    return render_template('3d_dance.html')

@app.route('/3d_bear')
def bear():
    return render_template('3d_bear.html')

@app.route('/3d_peace')
def peace():
    return render_template('3d_peace.html')

@app.route('/3d_RT')
def RT():
    return render_template('3d_RT.html')

@app.route('/3d_nanpa')
def nanpa():
    return render_template('3d_nanpa.html')

@app.route('/3d_ung')
def ung():
    return render_template('3d_ung.html')

@app.route('/3d_concert')
def concert():
    return render_template('3d_concert.html')

@app.route('/3d_jinri')
def jinri():
    return render_template('3d_jinri.html')

@app.route('/3d_tennis')
def tennis():
    return render_template('3d_tennis.html')

@app.route('/3d_lake')
def lake():
    return render_template('3d_lake.html')



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=62422)