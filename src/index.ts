import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

const user = new User()
const com = new Company()
const map = new CustomMap('map')
map.addUserMarker(user)
map.addCompanyMarker(com)