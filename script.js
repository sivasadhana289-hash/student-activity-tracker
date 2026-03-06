JS Options
1
let activities = [
2
    { id: 1, name: "React Components", completed: false },
3
    { id: 2, name: "CSS Grid", completed: false },
4
    { id: 3, name: "API Integration", completed: false }
5
];
6
​
7
function render() {
8
    const list = document.getElementById('activity-list');
9
    list.innerHTML = '';
10
    let done = 0;
11
​
12
    activities.forEach(a => {
13
        if(a.completed) done++;
14
        list.innerHTML += `
15
            <div class="item">
16
                <span>${a.name}</span>
17
                <button class="btn ${a.completed ? 'completed' : 'pending'}" onclick="toggle(${a.id})">
18
                    ${a.completed ? 'Done ✓' : 'Pending'}
19
                </button>
20
            </div>`;
21
    });
22
​
23
    let percent = (done / activities.length) * 100;
24
    document.getElementById('progress').style.width = percent + '%';
25
    document.getElementById('progress').innerText = Math.round(percent) + '%';
26
    document.getElementById('summary').innerText = `${done} of ${activities.length} completed`;
27
}
28
​
29
function toggle(id) {
30
    activities = activities.map(a => a.id === id ? {...a, completed: !a.completed} : a);
31
    render();
32
}
33
render();
