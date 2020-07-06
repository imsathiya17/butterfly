'use strict';

const Node = require('./node.js');
const CenterNode = require('./centerNode.js');
const Edge = require('./edge.js');
// const Group = require('./group.js');

module.exports = {
  nodes: [{
    id: 0,
    text: '测试0',
    Class: Node,
    _group: 'group_0',
    _isCircle: true
  }, {
    id: 1,
    text: '测试1',
    Class: Node,
    _group: 'group_0',
    _isCircle: true
  }, {
    id: 2,
    text: '测试2',
    Class: Node,
    _group: 'group_1',
    _isCircle: true
  }, {
    id: 3,
    text: '测试3',
    Class: Node,
    _group: 'group_1',
    _isCircle: true
  }, {
    id: 4,
    text: '测试4',
    Class: Node,
    _group: 'group_2',
    _isCircle: true
  }, {
    id: 5,
    text: '测试5',
    Class: Node,
    _group: 'group_2',
    _isCircle: true
  }, {
    id: 6,
    text: '测试6',
    Class: Node,
    _group: 'group_3',
    _isCircle: true
  }, {
    id: 7,
    text: '测试7',
    Class: Node,
    _group: 'group_3',
    _isCircle: true
  }, {
    id: 8,
    text: '测试8',
    Class: Node,
    _group: 'group_4',
    _isCircle: true
  }, {
    id: 9,
    text: '测试9',
    Class: Node,
    _group: 'group_4',
    _isCircle: true
  }, {
    id: 10,
    text: '测试10',
    Class: Node,
    _group: 'group_5',
    _isCircle: true
  }, {
    id: 11,
    text: '测试11',
    Class: Node,
    _group: 'group_5',
    _isCircle: true
  }, {
    id: 'centerNode',
    text: '城市出行',
    top: -18,
    left: -58,
    Class: CenterNode
  }],
  groups: [{
    id: 'group_0'
  }, {
    id: 'group_1'
  }, {
    id: 'group_2'
  }, {
    id: 'group_3'
  }, {
    id: 'group_4'
  }, {
    id: 'group_5'
  }],
  edges: [{
    id: 1,
    source: 'centerNode',
    target: 11,
    Class: Edge
  }, {
    id: 2,
    source: 'centerNode',
    target: 1,
    Class: Edge
  }]
}