module.exports = {
    devServer: {
        before(app) {
            app.get('/todo', function(req, res) {
                setTimeout(function() {
                    res.json([{
                        id: 0,
                        name: '今天要学会vuex'
                    }, {
                        id: 1,
                        name: '今年我要找到一份心仪的工作'
                    }])
                }, 1000)
            })
        }
    }
}
