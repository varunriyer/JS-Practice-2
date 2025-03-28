class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

let head;


function push(new_data) {

    let new_node = new Node(new_data);


    new_node.next = head;

    head = new_node;
}


function search(head, x) {

    let current = head;

    while (current != null) {
        if (current.data == x)


            return true;
        current = current.next;
    }


    return false;
}


push(10);
push(30);
push(11);
push(21);
push(14);

if (search(head, 1))
    console.log("Yes");
else
    console.log("No");

