import LoadingComponent from "@/components/Loading"


export default {
    install(Vue) {
        Vue.config.productionTip = false
        const LoadingObj = Vue.extend(LoadingComponent)
        const Loading = new LoadingObj();
        Loading.$mount()
        document.body.appendChild(Loading.$el)



        Vue.prototype.$loading = {
            show() {
                Loading.show()
            },
            hide() {
                Loading.hide()
            }
        }
    }
}