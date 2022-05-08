function newImage(assets,left, bottom){
    let pic = document.createElement('img')
pic.src = assets
pic.style.position = 'fixed'
pic.style.left = left + 'px'
pic.style.bottom = bottom + 'px'
document.body.append(pic)
return pic
}
function newItem(assets, left, bottom ){
    let item = newImage(assets,left, bottom)
 
    document.body.append(item)
    
    item.addEventListener('dblclick', function(){
        item.remove()
    })
       
}
function backGround(assets,left,bottom,width,hight){
    let back = document.createElement('img')
        back.src = assets;
        back.style.position = 'fixed'
        back.style.left = left + 'px'
        back.style.bottom = bottom + 'px'
        back.style.width = width + 'px'
        back.style.height = hight + 'px'
    document.body.append(back)
return back

}


backGround('assets/sky.png', 0,0,1700,730)
backGround('assets/grass.png', 0,0,1700,300)


newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 175, 200)
newImage('assets/pillar.png', 300, 50)
newImage('assets/rock.png', 50, 150)
newImage('assets/well.png', 150, 120)


newItem('assets/sword.png', 480, 200)
newItem('assets/staff.png',175,250 )
newItem('assets/sheild.png', 345, 290)