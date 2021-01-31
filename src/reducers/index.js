// アプリ内に存在するレデューサーを総括する役割を担う
import { combineReducers } from 'redux'
import count from './count'

// ここにリデューサーを噛ませる
export default combineReducers({ count })


