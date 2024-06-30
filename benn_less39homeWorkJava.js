//two sum
function twoSum(nums, target) {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        // if (seen.hasOwnProperty(complement)) {
            if (seen[complement]!=undefined) {
            return [seen[complement], i];
        }
        seen[nums[i]] = i;
    }
    throw new Error("No two sum solution");
}

console.log("indexes: ",twoSum([3,2,4], 6));//indexes:  [ 1, 2 ] 


// import java.util.HashSet;
// import java.util.Set;

// public class TwoSum {
//     public static int[] twoSum(int[] nums, int target) {
//         Set<Integer> set = new HashSet<>();
        
//         for (int i = 0; i < nums.length; i++) {
//             int complement = target - nums[i];
            
//             if (set.contains(complement)) {
//                 // נמצא זוג מתאים
//                 return new int[]{complement, nums[i]};
//             }
            
//             // אם לא, נוסיף את המספר הנוכחי לסט
//             set.add(nums[i]);
//         }
        
//         // אין פתרון לבעיה
//         throw new IllegalArgumentException("No two sum solution");
//     }

//     public static void main(String[] args) {
//         int[] result = twoSum(new int[]{3, 2, 4}, 6);
//         System.out.println("Indexes: [" + result[0] + ", " + result[1] + "]");
//     }
// }
