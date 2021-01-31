import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      {/*actions/index.jsで外部のAPIから取ってきたデータをオブジェクトにして渡すという動きを指定している*/}
      {/* データを見やすくするため、オブジェクト構造にするのがlodashというパッケージ */}
      {/* idをキーにそれぞれのレスポンスデータを返すようにする */}
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}