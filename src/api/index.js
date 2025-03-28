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
    },
    getSongLists(params){
        //console.log(params)
        return get('/getSongLists', params)
    },
    getSongListCategory(){
        return get('/getSongListCategory')
    }
}

export default api