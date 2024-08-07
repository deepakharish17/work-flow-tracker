document.addEventListener("DOMContentLoaded", () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const saveTaskBtn = document.getElementById('saveTaskBtn');
    const taskList = document.getElementById('taskList');
    const taskInput = document.getElementById('taskInput');
    const taskDescriptionInput = document.getElementById('taskDescriptionInput');
    const teamMemberInput = document.getElementById('teamMemberInput');
    const taskStatusSelect = document.getElementById('taskStatus');
    const deadlineInput = document.getElementById('deadlineInput');

    // Open modal
    addTaskBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Save task
    saveTaskBtn.addEventListener('click', () => {
        const taskName = taskInput.value.trim();
        const taskDescription = taskDescriptionInput.value.trim();
        const teamMember = teamMemberInput.value.trim();
        const taskStatus = taskStatusSelect.value;
        const deadline = deadlineInput.value;

        // Ensure all fields are filled
        if (taskName && taskDescription && teamMember && deadline) {
            const li = document.createElement('li');

            const taskDetails = document.createElement('div');
            taskDetails.className = 'task-details';

            const taskNameSpan = document.createElement('span');
            taskNameSpan.textContent = `Task: ${taskName}`;
            taskDetails.appendChild(taskNameSpan);

            const taskDescriptionSpan = document.createElement('span');
            taskDescriptionSpan.className = 'task-description';
            taskDescriptionSpan.textContent = `Description: ${taskDescription}`;
            taskDetails.appendChild(taskDescriptionSpan);

            const memberSpan = document.createElement('span');
            memberSpan.className = 'task-member';
            memberSpan.textContent = `Assigned to: ${teamMember}`;
            taskDetails.appendChild(memberSpan);

            const statusSpan = document.createElement('span');
            statusSpan.className = 'task-status';
            statusSpan.textContent = `Status: ${taskStatus}`;
            taskDetails.appendChild(statusSpan);

            const deadlineSpan = document.createElement('span');
            deadlineSpan.className = 'task-deadline';
            deadlineSpan.textContent = `Deadline: ${deadline}`;
            taskDetails.appendChild(deadlineSpan);

            li.appendChild(taskDetails);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "deleteBtn";
            deleteBtn.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            li.appendChild(deleteBtn);
            taskList.appendChild(li);

            // Clear input fields and close modal
            taskInput.value = '';
            taskDescriptionInput.value = '';
            teamMemberInput.value = '';
            taskStatusSelect.selectedIndex = 0;
            deadlineInput.value = '';
            modal.style.display = 'none';
        } else {
            alert('Please fill out all fields.');
        }
    });
});
