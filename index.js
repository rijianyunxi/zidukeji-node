(function see() {
    let token = localStorage.getItem('occ-token');
    let url = window.location.hash;
    let cid = /companyId=(.*?)&examId/.exec(url)[1];
    let eid = /examId=(.*)/.exec(url)[1];
    //获取视频id，存入数组
    function getList() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: `http://39.105.179.154:8090/app/gradevideo/details?companyId=${cid}&examId=${eid}`,
                headers: {
                    Authorization: 'Bearer ' + token
                },
                success: function (result) {
                    let videolist = result.videolist.map(r => r.id);
                    resolve(videolist)
                },
                error: function (error) {
                    reject('失败')
                },
            });
        })
    }
    //观看方法
    function watch(ji) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: `http://39.105.179.154:8090/app/gradevideo/player?cid=${cid}&eid=${eid}&rate=100&duration=3600&stopFlag=0&vid=${ji}`,
                headers: {
                    Authorization: 'Bearer ' + token
                },
                success: function (result) {
                    resolve(`第${ji}集观看完毕`)
                },
                error: function (error) {
                    reject(`第${ji}集观看失败`)
                },

            });
        })
    }
    //遍历播放
    async function list() {
        let res = await getList();
        for (let index = 0, len = res.length; index < len; index++) {
            let msg = await watch(res[index]);
            console.log(msg);
        }
        console.log('执行完毕');
    }
    list();
})()