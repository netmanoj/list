document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('item-form');
    const itemInput = document.getElementById('item-input');
    const itemList = document.getElementById('item-list');
    const filter = document.getElementById('filter');
    const clearButton = document.getElementById('clear');

    // Function to add an item
    function addItem(event) {
        event.preventDefault();
        const newItem = itemInput.value.trim();

        if (newItem !== '') {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(newItem));

            const removeButton = document.createElement('button');
            removeButton.className = 'remove-item btn-link text-red';
            removeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            li.appendChild(removeButton);

            itemList.appendChild(li);

            itemInput.value = '';
        }
    }

    // Function to remove an item
    function removeItem(event) {
        if (event.target.classList.contains('fa-xmark')) {
            if (confirm('Are you sure?')) {
                const li = event.target.parentElement.parentElement;
                itemList.removeChild(li);
            }
        }
    }

    // Function to filter items
    function filterItems(event) {
        const text = event.target.value.toLowerCase();
        const items = itemList.getElementsByTagName('li');

        Array.from(items).forEach((item) => {
            const itemName = item.firstChild.textContent;
            if (itemName.toLowerCase().indexOf(text) !== -1) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Function to clear all items
    function clearItems() {
        while (itemList.firstChild) {
            itemList.removeChild(itemList.firstChild);
        }
    }

    // Event listeners
    itemForm.addEventListener('submit', addItem);
    itemList.addEventListener('click', removeItem);
    filter.addEventListener('input', filterItems);
    clearButton.addEventListener('click', clearItems);
});
