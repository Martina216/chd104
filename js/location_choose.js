/*選擇地點，並存取其選擇資訊*/
const selectableButtons = document.querySelectorAll('.location');
const outputDiv = document.getElementById('selectedData');


selectableButtons.forEach(button => {
    button.addEventListener('click', function() {
        
        selectableButtons.forEach(item => {
            item.classList.remove('selected');
        });


        this.classList.add('selected');


        const selectedData = this.getAttribute('data-info');


        outputDiv.textContent = `Selected Data: ${selectedData}`;


        document.cookie = `selectedData=${selectedData}; expires=Wed, 20 Dec 2023 00:00:00 UTC; path=/`;


        generateActivityButtons(selectedData);

    });
});


function generateActivityButtons(selectedData) {
    const activitiesDiv = document.getElementById('selectedData');
    activitiesDiv.innerHTML = ''; 

    switch (selectedData) {
        case 'Data 1':
            outputDiv.innerHTML = `
            <button class="actv" data-activity="1">樹頂挑戰</button>
            <button class="actv" data-activity="2">林間滑索</button>
            <button class="actv" data-activity="3">高空探險</button>
            <button class="actv" data-activity="4">體驗課程</button>
            `;
            break;
        case 'Data 2':
            outputDiv.innerHTML = `
            <button class="actv" data-activity="5">樹頂挑戰</button>
            <button class="actv" data-activity="6">林間滑索</button>
            <button class="actv" data-activity="7">高空探險</button>
            <button class="actv" data-activity="8">體驗課程</button>
            `;
            break;
        
        case 'Data 3':
            outputDiv.innerHTML = `
            <button class="actv" data-activity="9">林間滑索</button>
            <button class="actv" data-activity="10">高空探險</button>
            <button class="actv" data-activity="11">體驗課程</button>
            `;
        break;
        case 'Data 4':
            outputDiv.innerHTML = `
            <button class="actv" data-activity="12">樹頂挑戰</button>
            <button class="actv" data-activity="13">林間滑索</button>
            <button class="actv" data-activity="14">高空探險</button>
            <button class="actv" data-activity="15">體驗課程</button>
            `;
            break;
            case 'Data 5':
            outputDiv.innerHTML = `
            <button class="actv" data-activity="16">樹頂挑戰</button>
            <button class="actv" data-activity="17">林間滑索</button>
            <button class="actv" data-activity="18">高空探險</button>
            <button class="actv" data-activity="19">體驗課程</button>
            `;
        break;
    }

    setupActivityListeners();
}

