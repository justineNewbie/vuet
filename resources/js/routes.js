import Ailment from './components/Ailment.vue'
import Medicine from './components/Medicine.vue'


export const routes = [
    {
        path: '/ailment',
        name: 'Ailment',
        component: Ailment
    },
    {
        path: '/medicine',
        name: 'Medicine',
        component: Medicine
    }
]