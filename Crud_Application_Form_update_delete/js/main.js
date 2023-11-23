// Event listener for form submission:-
document.getElementById("crudForm").addEventListener('submit', submitForm);

// Function to save data to localStorage

    function saveData(data){
        localStorage.setItem("userList", JSON.stringify(data));
    }

// Function to retrieve data from localStorage

    function fetchData(){
        return JSON.parse(localStorage.getItem('userList'))  || [];
    }

// Function to display user data
    function displayUserData(){
        const userData = document.getElementById('userData');
        const userList = fetchData();

        userData.innerHTML = '';
        userList.forEach((user, index)=>{

            const li = document.createElement('li');
            li.innerHTML=`
                <span>Name: ${user.name}, Email: ${user.email}</span>
                <button onclick="editUser(${index})">Edit</button>
                <button onclick="deleteUser(${index})">Delete</button>
            `;
            userData.appendChild(li);
        });
    }

// Initial dislay of user data
    displayUserData();

// Function to add or update a user:-
    function submitForm(event){
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        const userList = fetchData();

        if(name !=='' && email !==''){
            const newUser = {name, email};

            const editIndex = document.getElementById('submitButton').getAttribute('data-index');
            if(editIndex){
                userList[editIndex] = newUser;
                document.getElementById('submitButton').innerText = 'Create';
                document.getElementById('submitButton').removeAttribute('data-index');
            }else{
                userList.push(newUser);
            }
            saveData(userList);
            displayUserData();
            document.getElementById('crudForm').reset();

            userList.forEach(function(item, index){
                console.log(item.name+"  "+item.email);
            
        });
            
        }

        else{
            alert('Please fill in all fields')
        }
    }

// Function to edit a user

    function editUser (index){
        const userList = fetchData();
        const {name, email} =userList[index];

        document.getElementById('name').value = name;
        document.getElementById('email').value = email;

        document.getElementById('submitButton').innerHTML = 'Update';
        document.getElementById('submitButton').setAttribute('data-index', index);

    };

// Function to delete a user

    function deleteUser(index){
        const userList = fetchData();
        userList.splice(index, 1);
        saveData(userList);
        displayUserData();
    }