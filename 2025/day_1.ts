import * as fs from 'fs'
import { availableMemory } from 'process'

let test_input = `
L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`

const input: string = fs.readFileSync("./inputs/day_1.txt", 'utf8')



const rotations: string[] = input.split(/\r?\n/).filter(line => line.length > 0)

// PART 1
let pointer: number = 50
let key:     number = 0

rotations.forEach((rotation: string) => {
   const direction: string = rotation.charAt(0)
   const amount:    number = Number(rotation.slice(1))

   if (direction == 'L')
       pointer = (pointer - amount) % 100
    else 
       pointer = (pointer + amount) % 100

    if (pointer == 0) key++

})

console.log(key)

// PART 2
pointer = 50
key     = 0

rotations.forEach((rotation: string) => {
   const direction: string = rotation.charAt(0)
   const amount:    number = Number(rotation.slice(1))

   if (direction == 'L') {
      if (pointer > amount) 
         key++

      pointer = (pointer - amount) % 100
   }
   else {
      if (pointer < amount) 
         key++
   }

    if (pointer == 0) key++

})



