import { mount } from '@vue/test-utils'
import count from '@/components/count.vue'

describe('add 功能测试', ()=> {

    it('have wrapper', ()=> {
        let wrapper = mount(count)
        expect(wrapper.exists()).toBeTruthy()
    })

    it('has .add classs', ()=> {
        let wrapper = mount(count)
        expect(wrapper.find('.add')).toBeTruthy()
    })
})