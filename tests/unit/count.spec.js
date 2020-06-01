import { mount } from '@vue/test-utils'
import count from '@/components/count.vue'
import sb from '@/components/subs.vue'

' containes is isVueInstance '  // test-Utils 废除选项
' find(dom: id OR element OR class) findComponents(component: Component Name) '

describe('add 功能测试', ()=> {

    // wrapper 是否存在
    it('have wrapper', ()=> {
        let wrapper = mount(count)
        expect(wrapper.exists()).toBeTruthy()
    })

    // 是否拥有.add类
    it('has .add classs', ()=> {
        let wrapper = mount(count)
        expect(wrapper.find('.add')).toBeTruthy()
    })

    // 是否包含sb组件
    it('contains class add', ()=> {
        let wrapper = mount(count)
        expect(wrapper.findComponent(sb)).toBeTruthy()
    })

    // 容器class是否是container lj
    it('contains attributes class', ()=> {
        let wrapper = mount(count)
        expect(wrapper.attributes('class')).toBe('container lj')
    })

    // 返回容器class
    it('return wrapper class', ()=> {
        let wrapper = mount(count)
        expect(wrapper.classes()).toContain('container')        // container classes
        expect(wrapper.classes('container')).toBeTruthy()       // container classes
        expect(wrapper.find('.add')).toBeTruthy()               // find All
    })

    it('存根组件含义', ()=> {
        let wrapper = mount(count, {
            stubs: ['sb']
        })
        expect(wrapper.findAllComponents(sb)).toBeTruthy()
    })

    // 初始化propsData
    it('propsData', async ()=> {
        let wrapper = mount(count, {
            propsData: {
                value: 999
            }
        })
        expect(wrapper.props('value')).toBe(999)            // 检测props value 999
        expect(wrapper.text()).toContain(999)               // 文本是否包含999
        expect(wrapper.find('span').text()).toBe('999')     // span中数字是否是初始化999
        wrapper.find('.add').trigger('click')               // 点击增加
        await wrapper.vm.$nextTick()                        // 等待事件回调渲染dom
        expect(wrapper.find('span').text()).toBe('1000')    // 点击后数字
    })
})