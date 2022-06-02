export const state = () => ({
    token: '1|ymlsh0vXHWweVtm6hsRwWlvcRYOkqVWLZJaxqNVx'
});

export const mutations = {}
export const actions = {
    async getListData () {
        console.log('loremvfff')
        console.log(state.token)
        return await this.$axios.get('/investigations', {
            headers: {
                'Authorization': `Bearer ${state.token}`
            }
        }).then(res => {
            return res
        }).catch(err => {
            return err
        })
    },
}
export const getters = {
    token: (state) => state.token
}