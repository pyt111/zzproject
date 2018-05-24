// import * as API from 'api/axiosMetonds';
// import { loginUrl } from 'api/url';

const topNav = {
    state: {
        datases:'',
    },
    mutations: {
        XTE:(state,datas) => {
            console.log(datas);
            state.datase = datas
        }
    },
    actions:{
        // x_TXMX: async ({commit},data) => {
        //     return await API.post(withdrawMoneyDetail,data)
           
        // },
     
    }
}
export default topNav