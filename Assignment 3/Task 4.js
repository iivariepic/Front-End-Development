const song = {
    name: 'Maamme-laulu',
    _duration: 310,

    get duration() {
        let minutes = Math.floor(this._duration / 60);
        let seconds = this._duration % 60;
        return `${minutes}:${seconds}`;
    },

    set duration(duration_seconds) {
        this._duration = duration_seconds
    },
};

song.duration = 210
console.log(song.duration)

