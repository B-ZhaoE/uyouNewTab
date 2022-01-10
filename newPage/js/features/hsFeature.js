function hsFeature(){
    var hideHS = elemenetGetId('hideHS');
    var historyHS = elemenetGetId('historyHS');
    var reloadHS = elemenetGetId('reloadHS');
    var calHS = elemenetGetId('calHS');
    var timeHS = elemenetGetId('timeHS');
    var downHS = elemenetGetId('downHS');
    var infoHS = elemenetGetId('infoHS');
    hideHS.onclick = function(){
        if(hideHS.className == 'hsFeature'){
            chrome.storage.local.set({'hideHS':'hide'});
            hideHS.className = 'hsFeatureHide';
            hideHS.innerText = '隐藏';
            elemenetGetId('hide').hidden = true;
        }else{
            chrome.storage.local.set({'hideHS':'show'});
            hideHS.className = 'hsFeature';
            hideHS.innerText = '显示';
            elemenetGetId('hide').hidden = false;
        }
    }
    historyHS.onclick = function(){
        if(historyHS.className == 'hsFeature'){
            chrome.storage.local.set({'historyHS':'hide'});
            historyHS.className = 'hsFeatureHide';
            historyHS.innerText = '隐藏';
            elemenetGetId('history').hidden = true;
        }else{
            chrome.storage.local.set({'historyHS':'show'});
            historyHS.className = 'hsFeature';
            historyHS.innerText = '显示';
            elemenetGetId('history').hidden = false;
        }
    }
    reloadHS.onclick = function(){
        if(reloadHS.className == 'hsFeature'){
            chrome.storage.local.set({'reloadHS':'hide'});
            reloadHS.className = 'hsFeatureHide';
            reloadHS.innerText = '隐藏';
            elemenetGetId('reload').hidden = true;
        }else{
            chrome.storage.local.set({'reloadHS':'show'});
            reloadHS.className = 'hsFeature';
            reloadHS.innerText = '显示';
            elemenetGetId('reload').hidden = false;
        }
    }
    calHS.onclick = function(){
        if(calHS.className == 'hsFeature'){
            chrome.storage.local.set({'calHS':'hide'});
            calHS.className = 'hsFeatureHide';
            calHS.innerText = '隐藏';
            elemenetGetId('cal').hidden = true;
        }else{
            chrome.storage.local.set({'calHS':'show'});
            calHS.className = 'hsFeature';
            calHS.innerText = '显示';
            elemenetGetId('cal').hidden = false;
        }
    }
    timeHS.onclick = function(){
        if(timeHS.className == 'hsFeature'){
            chrome.storage.local.set({'timeHS':'hide'});
            timeHS.className = 'hsFeatureHide';
            timeHS.innerText = '隐藏';
            elemenetGetId('clock').hidden = true;
        }else{
            chrome.storage.local.set({'timeHS':'show'});
            timeHS.className = 'hsFeature';
            timeHS.innerText = '显示';
            elemenetGetId('clock').hidden = false;
        }
    }
    downHS.onclick = function(){
        if(downHS.className == 'hsFeature'){
            chrome.storage.local.set({'downHS':'hide'});
            downHS.className = 'hsFeatureHide';
            downHS.innerText = '隐藏';
            elemenetGetId('down').hidden = true;
        }else{
            chrome.storage.local.set({'downHS':'show'});
            downHS.className = 'hsFeature';
            downHS.innerText = '显示';
            elemenetGetId('down').hidden = false;
        }
    }
    infoHS.onclick = function(){
        if(infoHS.className == 'hsFeature'){
            chrome.storage.local.set({'infoHS':'hide'});
            infoHS.className = 'hsFeatureHide';
            infoHS.innerText = '隐藏';
            elemenetGetId('info').hidden = true;
        }else{
            chrome.storage.local.set({'infoHS':'show'});
            infoHS.className = 'hsFeature';
            infoHS.innerText = '显示';
            elemenetGetId('info').hidden = false;
        }
    }
}
function hsFeatureUse(){
    chrome.storage.local.get(['hideHS','historyHS','reloadHS','calHS','timeHS','downHS','infoHS'],function(budget){
        let hideHS = budget.hideHS;
        let historyHS = budget.historyHS;
        let reloadHS = budget.reloadHS;
        let calHS = budget.calHS;
        let timeHS = budget.timeHS;
        let downHS = budget.downHS;
        let infoHS = budget.infoHS;
        console.log(reloadHS);
        if(hideHS == 'hide'){
            elemenetGetId('hide').hidden = true;
            elemenetGetId('hideHS').className = 'hsFeatureHide';
            elemenetGetId('hideHS').innerText = '隐藏';
        }
        if(historyHS == 'hide'){
            elemenetGetId('history').hidden = true;
            elemenetGetId('historyHS').className = 'hsFeatureHide';
            elemenetGetId('historyHS').innerText = '隐藏';
        }
        if(reloadHS == 'hide'){
            elemenetGetId('reload').hidden = true;
            elemenetGetId('reloadHS').className = 'hsFeatureHide';
            elemenetGetId('reloadHS').innerText = '隐藏';
        }
        if(calHS == 'hide'){
            elemenetGetId('cal').hidden = true;
            elemenetGetId('calHS').className = 'hsFeatureHide';
            elemenetGetId('calHS').innerText = '隐藏';
        }
        if(timeHS == 'hide'){
            elemenetGetId('clock').hidden = true;
            elemenetGetId('timeHS').className = 'hsFeatureHide';
            elemenetGetId('timeHS').innerText = '隐藏';
        }
        if(downHS == 'hide'){
            elemenetGetId('down').hidden = true;
            elemenetGetId('downHS').className = 'hsFeatureHide';
            elemenetGetId('downHS').innerText = '隐藏';
        }
        if(infoHS == 'hide'){
            elemenetGetId('info').hidden = true;
            elemenetGetId('infoHS').className = 'hsFeatureHide';
            elemenetGetId('infoHS').innerText = '隐藏';
        }
    })
}