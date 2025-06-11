import {atom, selector} from 'recoil'

const networkAtom = atom({
    key:'networkAtom',
    default:102
})

const jobAtom = atom({
    key:'jobAtom',
    default:0
})

const notificationAtom = atom({
    key:'notificationAtom',
    default:12
})
const messageAtom = atom({
    key:'messageAtom',
    default:0
})

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get: ({get}) =>{
        return get(notificationAtom) + get(jobAtom) + get(messageAtom) + get(networkAtom)
    }
}) 

export {networkAtom, jobAtom, notificationAtom, messageAtom}
