import basketballLongImg from './basketball-long.jpg'
import layupImg from './layup.jpg'
import outdoorImg from './outdoor.jpg'
import overheadImg from './overhead.jpg'
import pickupImg from './pickup.jpg'

const getImage = img => {
    const imageArray = {
        "basketballLong": basketballLongImg,
        "layup": layupImg,
        "outdoor": outdoorImg,
        "overhead": overheadImg,
        "pickup": pickupImg
    }
    return imageArray[img]
}

export default getImage