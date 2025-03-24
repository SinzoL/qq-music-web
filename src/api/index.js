import {get} from "../utils/request";

const api = {
    getMusicList(disstid) {
        return get('/getSongListDetail', disstid)
    },
    getMusicPlay(musicid) {
        return get('/getMusicPlay', musicid)
    },
    getAlbunmInfo(albumid) {     
        return get('/getAlbunmInfo', albumid)
    }
}

export default api