import { INodeType } from '@/interfaces'

import ABCNode from '@/components/_nodes_/ABCNode'
import DefaultNode from '@/components/_nodes_/DefaultNode'
import YesNoNode from '@/components/_nodes_/YesNoNode'

export default {
  [INodeType.ABC]: ABCNode,
  [INodeType.YN]: YesNoNode,
  [INodeType.DEFAULT]: DefaultNode,
}
