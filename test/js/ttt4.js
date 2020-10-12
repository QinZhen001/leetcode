class Tree {
  constructor(node) {
    this.root = node;
  }

  // 根据名字找到对应的节点
  find(name) {
    return this._find(this.root, name);
  }

  _find(node, name) {
    if (!node) {
      return;
    }
    if (node.name == name) {
      return node;
    }
    const children = node.children || [];
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      let node = this._find(child, name);
      if (node) {
        return node;
      }
    }
  }

  death(name) {
    let node = this.find(name);
    node = null;
  }

  print() {
    let res = [];
    this.successor(this.root, res);
    console.log("print", res);
    return res;
  }

  successor(node, res) {
    if (!node) {
      return;
    }
    if (!res.includes(node.name)) {
      res.push(node.name);
    }
    const children = node.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      this.successor(child, res);
    }
  }
}

class Node {
  constructor({ name, children = [], parent }) {
    this.name = name;
    this.children = children;
    this.parent = parent;
  }

  addChild(node) {
    this.children.push(node);
  }
}

/**
 * @param {string} kingName
 */
var ThroneInheritance = function (kingName) {
  this.kingName = kingName;
  let node = new Node({
    name: kingName,
  });
  this.tree = new Tree(node);
};

/**
 * @param {string} parentName
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function (parentName, childName) {
  const node = this.tree.find(parentName);
  const child = new Node({
    name: childName,
    parent: node,
  });
  if (node) {
    node.addChild(child);
  }
};

/**
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function (name) {
  const node = this.tree.find(name);
  const parent = node.parent;
  for (let i = 0; i < parent.children.length; i++) {
    let child = parent.children[i];
    if (child === node) {
      parent.children.splice(i, 1);
      return;
    }
  }
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function () {
  return this.tree.print();
};

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */

let t = new ThroneInheritance("king"); // 继承顺序：king
t.birth("king", "andy"); // 继承顺序：king > andy
t.birth("king", "bob"); // 继承顺序：king > andy > bob
t.birth("king", "catherine"); // 继承顺序：king > andy > bob > catherine
t.birth("andy", "matthew"); // 继承顺序：king > andy > matthew > bob > catherine
t.birth("bob", "alex"); // 继承顺序：king > andy > matthew > bob > alex > catherine
t.birth("bob", "asha"); // 继承顺序：king > andy > matthew > bob > alex > asha > catherine

console.log(t.tree);
// debugger;

t.getInheritanceOrder(); // 返回 ["king", "andy", "matthew", "bob", "alex", "asha", "catherine"]

t.death("bob"); // 继承顺序：king > andy > matthew > bob（已经去世）> alex > asha > catherine

console.log(t.tree);
t.getInheritanceOrder(); // 返回 ["king", "andy", "matthew", "alex", "asha", "catherine"]

