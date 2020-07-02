
(function() {
    var pressedKeys = {};

    function setKey(event, status) {
        var code = event.keyCode; //возвращает код нажатой в данной момент кнопки
        var key;

        switch(code) {
            case 32:
                key = 'SPACE'; break;
            case 37:
                key = 'LEFT'; break;
            case 38:
                key = 'UP'; break;
            case 39:
                key = 'RIGHT'; break;
            case 40:
                key = 'DOWN'; break;
            default:
                // ASCII -> string
                key = String.fromCharCode(code);
        }

        pressedKeys[key] = status;
    }
    
    //function(e) == function(event)
    //регистрируем обработчик событий для данного документа
    //keydown - клавиша нажата, keyup - клавиша отпущена
    //blur - пользователь убрал фокус от данного окна
    
    document.addEventListener('keydown', function(e) {
        setKey(e, true);
    });

    document.addEventListener('keyup', function(e) {
        setKey(e, false);
    });

    window.addEventListener('blur', function() {
        pressedKeys = {};
    });
    
    //функция проверки нажатия - если клавиша нажата, возвращается массив нажатых клавиш 
    //touppercase - abc->ABC
    window.input = {
        isDown: function(key) {
            return pressedKeys[key.toUpperCase()];
        }
    };
})();
