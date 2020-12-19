import axios from "axios";
const BASEURL = "https://randomuser.me/api/";
const PARAM = "?results=25&nat=us&inc=name,email,location,cell&noinfo?";
export default {
    search: function() {
        return axios.get(BASEURL + PARAM);
    }
};