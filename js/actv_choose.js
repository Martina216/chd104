/*選擇活動，並保留其選擇值*/
function setupActivityListeners() {
    // 获取所有可选择的活动按钮
    const selectableActivities = document.querySelectorAll('.actv');

    // 点击事件监听器 - 活动按钮
    selectableActivities.forEach(activityButton => {
        activityButton.addEventListener('click', function() {
            // 移除所有活动按钮的选中状态
            selectableActivities.forEach(item => {
                item.classList.remove('selected');
            });

            // 将当前点击的活动按钮标记为选定状态
            this.classList.add('selected');

            // 获取选定的活动按钮的信息（data-activity 属性值）
            const selectedActivity = this.getAttribute('data-activity');

            // 将选定的活动按钮信息存储到 Cookie 中
            document.cookie = `selectedActivity=${selectedActivity}; expires=Wed, 20 Dec 2023 00:00:00 UTC; path=/`;

            console.log('alreadyPressed:', selectedActivity);
            console.log('Cookie:', document.cookie);
        });
    });
}