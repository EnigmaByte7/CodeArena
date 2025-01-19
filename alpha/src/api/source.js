export const data = {
    "data": {
      "activeDailyCodingChallengeQuestion": {
        "date": "2025-01-19",
        "link": "/problems/trapping-rain-water-ii/",
        "question": {
          "questionId": "407",
          "questionFrontendId": "407",
          "boundTopicId": null,
          "title": "Trapping Rain Water II",
          "titleSlug": "trapping-rain-water-ii",
          "content": "\u003Cp\u003EGiven an \u003Ccode\u003Em x n\u003C/code\u003E integer matrix \u003Ccode\u003EheightMap\u003C/code\u003E representing the height of each unit cell in a 2D elevation map, return \u003Cem\u003Ethe volume of water it can trap after raining\u003C/em\u003E.\u003C/p\u003E\n\n\u003Cp\u003E&nbsp;\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong class=\"example\"\u003EExample 1:\u003C/strong\u003E\u003C/p\u003E\n\u003Cimg alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/04/08/trap1-3d.jpg\" style=\"width: 361px; height: 321px;\" /\u003E\n\u003Cpre\u003E\n\u003Cstrong\u003EInput:\u003C/strong\u003E heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]\n\u003Cstrong\u003EOutput:\u003C/strong\u003E 4\n\u003Cstrong\u003EExplanation:\u003C/strong\u003E After the rain, water is trapped between the blocks.\nWe have two small ponds 1 and 3 units trapped.\nThe total volume of water trapped is 4.\n\u003C/pre\u003E\n\n\u003Cp\u003E\u003Cstrong class=\"example\"\u003EExample 2:\u003C/strong\u003E\u003C/p\u003E\n\u003Cimg alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/04/08/trap2-3d.jpg\" style=\"width: 401px; height: 321px;\" /\u003E\n\u003Cpre\u003E\n\u003Cstrong\u003EInput:\u003C/strong\u003E heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]\n\u003Cstrong\u003EOutput:\u003C/strong\u003E 10\n\u003C/pre\u003E\n\n\u003Cp\u003E&nbsp;\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong\u003EConstraints:\u003C/strong\u003E\u003C/p\u003E\n\n\u003Cul\u003E\n\t\u003Cli\u003E\u003Ccode\u003Em == heightMap.length\u003C/code\u003E\u003C/li\u003E\n\t\u003Cli\u003E\u003Ccode\u003En == heightMap[i].length\u003C/code\u003E\u003C/li\u003E\n\t\u003Cli\u003E\u003Ccode\u003E1 &lt;= m, n &lt;= 200\u003C/code\u003E\u003C/li\u003E\n\t\u003Cli\u003E\u003Ccode\u003E0 &lt;= heightMap[i][j] &lt;= 2 * 10\u003Csup\u003E4\u003C/sup\u003E\u003C/code\u003E\u003C/li\u003E\n\u003C/ul\u003E\n",
          "translatedTitle": null,
          "translatedContent": null,
          "isPaidOnly": false,
          "difficulty": "Hard",
          "likes": 4143,
          "dislikes": 118,
          "isLiked": null,
          "similarQuestions": "[{\"title\": \"Trapping Rain Water\", \"titleSlug\": \"trapping-rain-water\", \"difficulty\": \"Hard\", \"translatedTitle\": null}, {\"title\": \"Maximum Number of Points From Grid Queries\", \"titleSlug\": \"maximum-number-of-points-from-grid-queries\", \"difficulty\": \"Hard\", \"translatedTitle\": null}]",
          "exampleTestcases": "[[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]\n[[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]",
          "contributors": [],
          "topicTags": [
            {
              "name": "Array",
              "slug": "array",
              "translatedName": null
            },
            {
              "name": "Breadth-First Search",
              "slug": "breadth-first-search",
              "translatedName": null
            },
            {
              "name": "Heap (Priority Queue)",
              "slug": "heap-priority-queue",
              "translatedName": null
            },
            {
              "name": "Matrix",
              "slug": "matrix",
              "translatedName": null
            }
          ],
          "companyTagStats": null,
          "codeSnippets": [
            {
              "lang": "C++",
              "langSlug": "cpp",
              "code": "class Solution {\npublic:\n    int trapRainWater(vector\u003Cvector\u003Cint\u003E\u003E& heightMap) {\n        \n    }\n};"
            },
            {
              "lang": "Java",
              "langSlug": "java",
              "code": "class Solution {\n    public int trapRainWater(int[][] heightMap) {\n        \n    }\n}"
            },
            {
              "lang": "Python",
              "langSlug": "python",
              "code": "class Solution(object):\n    def trapRainWater(self, heightMap):\n        \"\"\"\n        :type heightMap: List[List[int]]\n        :rtype: int\n        \"\"\"\n        "
            },
            {
              "lang": "Python3",
              "langSlug": "python3",
              "code": "class Solution:\n    def trapRainWater(self, heightMap: List[List[int]]) -\u003E int:\n        "
            },
            {
              "lang": "C",
              "langSlug": "c",
              "code": "int trapRainWater(int** heightMap, int heightMapSize, int* heightMapColSize) {\n    \n}"
            },
            {
              "lang": "C#",
              "langSlug": "csharp",
              "code": "public class Solution {\n    public int TrapRainWater(int[][] heightMap) {\n        \n    }\n}"
            },
            {
              "lang": "JavaScript",
              "langSlug": "javascript",
              "code": "/**\n * @param {number[][]} heightMap\n * @return {number}\n */\nvar trapRainWater = function(heightMap) {\n    \n};"
            },
            {
              "lang": "TypeScript",
              "langSlug": "typescript",
              "code": "function trapRainWater(heightMap: number[][]): number {\n    \n};"
            },
            {
              "lang": "PHP",
              "langSlug": "php",
              "code": "class Solution {\n\n    /**\n     * @param Integer[][] $heightMap\n     * @return Integer\n     */\n    function trapRainWater($heightMap) {\n        \n    }\n}"
            },
            {
              "lang": "Swift",
              "langSlug": "swift",
              "code": "class Solution {\n    func trapRainWater(_ heightMap: [[Int]]) -\u003E Int {\n        \n    }\n}"
            },
            {
              "lang": "Kotlin",
              "langSlug": "kotlin",
              "code": "class Solution {\n    fun trapRainWater(heightMap: Array\u003CIntArray\u003E): Int {\n        \n    }\n}"
            },
            {
              "lang": "Dart",
              "langSlug": "dart",
              "code": "class Solution {\n  int trapRainWater(List\u003CList\u003Cint\u003E\u003E heightMap) {\n    \n  }\n}"
            },
            {
              "lang": "Go",
              "langSlug": "golang",
              "code": "func trapRainWater(heightMap [][]int) int {\n    \n}"
            },
            {
              "lang": "Ruby",
              "langSlug": "ruby",
              "code": "# @param {Integer[][]} height_map\n# @return {Integer}\ndef trap_rain_water(height_map)\n    \nend"
            },
            {
              "lang": "Scala",
              "langSlug": "scala",
              "code": "object Solution {\n    def trapRainWater(heightMap: Array[Array[Int]]): Int = {\n        \n    }\n}"
            },
            {
              "lang": "Rust",
              "langSlug": "rust",
              "code": "impl Solution {\n    pub fn trap_rain_water(height_map: Vec\u003CVec\u003Ci32\u003E\u003E) -\u003E i32 {\n        \n    }\n}"
            },
            {
              "lang": "Racket",
              "langSlug": "racket",
              "code": "(define/contract (trap-rain-water heightMap)\n  (-\u003E (listof (listof exact-integer?)) exact-integer?)\n  )"
            },
            {
              "lang": "Erlang",
              "langSlug": "erlang",
              "code": "-spec trap_rain_water(HeightMap :: [[integer()]]) -\u003E integer().\ntrap_rain_water(HeightMap) -\u003E\n  ."
            },
            {
              "lang": "Elixir",
              "langSlug": "elixir",
              "code": "defmodule Solution do\n  @spec trap_rain_water(height_map :: [[integer]]) :: integer\n  def trap_rain_water(height_map) do\n    \n  end\nend"
            }
          ],
          "stats": "{\"totalAccepted\": \"126K\", \"totalSubmission\": \"236.4K\", \"totalAcceptedRaw\": 126037, \"totalSubmissionRaw\": 236357, \"acRate\": \"53.3%\"}",
          "hints": [],
          "solution": {
            "id": "2651",
            "canSeeDetail": true,
            "paidOnly": false,
            "hasVideoSolution": false,
            "paidOnlyVideo": true
          },
          "status": null,
          "sampleTestCase": "[[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]",
          "metaData": "{\r\n  \"name\": \"trapRainWater\",\r\n  \"params\": [\r\n    {\r\n      \"name\": \"heightMap\",\r\n      \"type\": \"integer[][]\"\r\n    }\r\n  ],\r\n  \"return\": {\r\n    \"type\": \"integer\"\r\n  }\r\n}",
          "judgerAvailable": true,
          "judgeType": "large",
          "mysqlSchemas": [],
          "enableRunCode": true,
          "enableTestMode": false,
          "enableDebugger": true,
          "envInfo": "{\"cpp\": [\"C++\", \"\u003Cp\u003ECompiled with \u003Ccode\u003E clang 19 \u003C/code\u003E using the latest C++ 23 standard, and \u003Ccode\u003Elibstdc++\u003C/code\u003E provided by GCC 14.\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003EYour code is compiled with level two optimization (\u003Ccode\u003E-O2\u003C/code\u003E). \u003Ca href=\\\"https://github.com/google/sanitizers/wiki/AddressSanitizer\\\" target=\\\"_blank\\\"\u003EAddressSanitizer\u003C/a\u003E is also enabled to help detect out-of-bounds and use-after-free bugs.\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003EMost standard library headers are already included automatically for your convenience.\u003C/p\u003E\"], \"java\": [\"Java\", \"\u003Cp\u003E\u003Ccode\u003EOpenJDK 21\u003C/code\u003E. Using compile arguments: \u003Ccode\u003E--enable-preview --release 21\u003C/code\u003E\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003EMost standard library headers are already included automatically for your convenience.\u003C/p\u003E\\r\\n\u003Cp\u003EIncludes \u003Ccode\u003EPair\u003C/code\u003E class from https://docs.oracle.com/javase/8/javafx/api/javafx/util/Pair.html.\u003C/p\u003E\"], \"python\": [\"Python\", \"\u003Cp\u003E\u003Ccode\u003EPython 2.7.18\u003C/code\u003E.\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003EMost libraries are already imported automatically for your convenience, such as \u003Ca href=\\\"https://docs.python.org/2/library/array.html\\\" target=\\\"_blank\\\"\u003Earray\u003C/a\u003E, \u003Ca href=\\\"https://docs.python.org/2/library/bisect.html\\\" target=\\\"_blank\\\"\u003Ebisect\u003C/a\u003E, \u003Ca href=\\\"https://docs.python.org/2/library/collections.html\\\" target=\\\"_blank\\\"\u003Ecollections\u003C/a\u003E. If you need more libraries, you can import it yourself.\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003EFor Map/TreeMap data structure, you may use \u003Ca href=\\\"http://www.grantjenks.com/docs/sortedcontainers/\\\" target=\\\"_blank\\\"\u003Esortedcontainers\u003C/a\u003E library.\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003ENote that Python 2.7 \u003Ca href=\\\"https://www.python.org/dev/peps/pep-0373/\\\" target=\\\"_blank\\\"\u003Eis not maintained anymore\u003C/a\u003E. For the latest Python, please choose Python3 instead.\u003C/p\u003E\"], \"c\": [\"C\", \"\u003Cp\u003ECompiled with \u003Ccode\u003Egcc 14\u003C/code\u003E using the gnu11 standard.\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003EYour code is compiled with level one optimization (\u003Ccode\u003E-O2\u003C/code\u003E). \u003Ca href=\\\"https://github.com/google/sanitizers/wiki/AddressSanitizer\\\" target=\\\"_blank\\\"\u003EAddressSanitizer\u003C/a\u003E is also enabled to help detect out-of-bounds and use-after-free bugs.\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003EMost standard library headers are already included automatically for your convenience.\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003EFor hash table operations, you may use \u003Ca href=\\\"https://troydhanson.github.io/uthash/\\\" target=\\\"_blank\\\"\u003Euthash\u003C/a\u003E. \\\"uthash.h\\\" is included by default. Below are some examples:\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003E\u003Cb\u003E1. Adding an item to a hash.\u003C/b\u003E\\r\\n\u003Cpre\u003E\\r\\nstruct hash_entry {\\r\\n    int id;            /* we'll use this field as the key */\\r\\n    char name[10];\\r\\n    UT_hash_handle hh; /* makes this structure hashable */\\r\\n};\\r\\n\\r\\nstruct hash_entry *users = NULL;\\r\\n\\r\\nvoid add_user(struct hash_entry *s) {\\r\\n    HASH_ADD_INT(users, id, s);\\r\\n}\\r\\n\u003C/pre\u003E\\r\\n\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003E\u003Cb\u003E2. Looking up an item in a hash:\u003C/b\u003E\\r\\n\u003Cpre\u003E\\r\\nstruct hash_entry *find_user(int user_id) {\\r\\n    struct hash_entry *s;\\r\\n    HASH_FIND_INT(users, &user_id, s);\\r\\n    return s;\\r\\n}\\r\\n\u003C/pre\u003E\\r\\n\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003E\u003Cb\u003E3. Deleting an item in a hash:\u003C/b\u003E\\r\\n\u003Cpre\u003E\\r\\nvoid delete_user(struct hash_entry *user) {\\r\\n    HASH_DEL(users, user);  \\r\\n}\\r\\n\u003C/pre\u003E\\r\\n\u003C/p\u003E\"], \"csharp\": [\"C#\", \"\u003Cp\u003E\u003Ca href=\\\"https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-13\\\" target=\\\"_blank\\\"\u003EC# 13\u003C/a\u003E with .NET 9 runtime\u003C/p\u003E\"], \"javascript\": [\"JavaScript\", \"\u003Cp\u003E\u003Ccode\u003ENode.js 20.10.0\u003C/code\u003E.\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003EYour code is run with \u003Ccode\u003E--harmony\u003C/code\u003E flag, enabling \u003Ca href=\\\"http://node.green/\\\" target=\\\"_blank\\\"\u003Enew ES6 features\u003C/a\u003E.\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003E\u003Ca href=\\\"https://lodash.com\\\" target=\\\"_blank\\\"\u003Elodash.js\u003C/a\u003E library is included by default.\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003EFor Priority Queue / Queue data structures, you may use 5.4.0 version of \u003Ca href=\\\"https://github.com/datastructures-js/priority-queue/blob/v5/README.md\\\" target=\\\"_blank\\\"\u003Edatastructures-js/priority-queue\u003C/a\u003E and 4.2.3 version of \u003Ca href=\\\"https://github.com/datastructures-js/queue/tree/v4.2.3\\\" target=\\\"_blank\\\"\u003Edatastructures-js/queue\u003C/a\u003E and 1.0.4 version of \u003Ca href=\\\"https://github.com/datastructures-js/deque/tree/v1.0.4\\\" target=\\\"_blank\\\"\u003Edatastructures-js/deque\u003C/a\u003E.\u003C/p\u003E\"], \"ruby\": [\"Ruby\", \"\u003Cp\u003E\u003Ccode\u003ERuby 3.2\u003C/code\u003E\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003ESome common data structure implementations are provided in the Algorithms module: https://www.rubydoc.info/github/kanwei/algorithms/Algorithms\u003C/p\u003E\"], \"swift\": [\"Swift\", \"\u003Cp\u003E\u003Ccode\u003ESwift 6.0\u003C/code\u003E.\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003EYou may use the following packages:\u003Cbr/\u003E\\r\\n\u003Ca href=\\\"https://github.com/apple/swift-algorithms/tree/1.2.0\\\" target=\\\"_blank\\\"\u003Eswift-algorithms 1.2.0\u003C/a\u003E\u003Cbr/\u003E\\r\\n\u003Ca href=\\\"https://github.com/apple/swift-collections/tree/1.1.4\\\" target=\\\"_blank\\\"\u003Eswift-collections 1.1.4\u003C/a\u003E\u003Cbr/\u003E\\r\\n\u003Ca href=\\\"https://github.com/apple/swift-numerics/tree/1.0.2\\\" target=\\\"_blank\\\"\u003Eswift-numerics 1.0.2\u003C/a\u003E\u003C/p\u003E\"], \"golang\": [\"Go\", \"\u003Cp\u003E\u003Ccode\u003EGo 1.23\u003C/code\u003E\u003C/p\u003E\\r\\n\u003Cp\u003ESupport \u003Ca href=\\\"https://pkg.go.dev/github.com/emirpasic/gods@v1.18.1\\\" target=\\\"_blank\\\"\u003Ehttps://pkg.go.dev/github.com/emirpasic/gods@v1.18.1\u003C/a\u003E and \u003Ca href=\\\"https://pkg.go.dev/github.com/emirpasic/gods/v2@v2.0.0-alpha\\\" target=\\\"_blank\\\"\u003Ehttps://pkg.go.dev/github.com/emirpasic/gods/v2@v2.0.0-alpha\u003C/a\u003E library.\u003C/p\u003E\"], \"python3\": [\"Python3\", \"\u003Cp\u003E\u003Ccode\u003EPython 3.11\u003C/code\u003E.\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003EMost libraries are already imported automatically for your convenience, such as \u003Ca href=\\\"https://docs.python.org/3/library/array.html\\\" target=\\\"_blank\\\"\u003Earray\u003C/a\u003E, \u003Ca href=\\\"https://docs.python.org/3/library/bisect.html\\\" target=\\\"_blank\\\"\u003Ebisect\u003C/a\u003E, \u003Ca href=\\\"https://docs.python.org/3/library/collections.html\\\" target=\\\"_blank\\\"\u003Ecollections\u003C/a\u003E. If you need more libraries, you can import it yourself.\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003EFor Map/TreeMap data structure, you may use \u003Ca href=\\\"http://www.grantjenks.com/docs/sortedcontainers/\\\" target=\\\"_blank\\\"\u003Esortedcontainers\u003C/a\u003E library.\u003C/p\u003E\"], \"scala\": [\"Scala\", \"\u003Cp\u003E\u003Ccode\u003EScala 3.3.1\u003C/code\u003E.\u003C/p\u003E\"], \"kotlin\": [\"Kotlin\", \"\u003Cp\u003E\u003Ccode\u003EKotlin 1.9.0\u003C/code\u003E.\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003EWe are using an experimental compiler provided by JetBrains.\u003C/p\u003E\"], \"rust\": [\"Rust\", \"\u003Cp\u003E\u003Ccode\u003ERust 1.79.0\u003C/code\u003E. Your code will be compiled with \u003Ccode\u003Eopt-level\u003C/code\u003E 2.\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003ESupports \u003Ca href=\\\"https://crates.io/crates/rand\\\" target=\\\"_blank\\\"\u003Erand v0.8\u003C/a\u003E and \u003Ca href=\\\"https://crates.io/crates/regex\\\" target=\\\"_blank\\\"\u003Eregex\\u00a0v1\u003C/a\u003E from crates.io\u003C/p\u003E\"], \"php\": [\"PHP\", \"\u003Cp\u003E\u003Ccode\u003EPHP 8.2\u003C/code\u003E.\u003C/p\u003E\\r\\n\u003Cp\u003EWith bcmath module\u003C/p\u003E\"], \"typescript\": [\"Typescript\", \"\u003Cp\u003E\u003Ccode\u003ETypeScript 5.1.6, Node.js 20.10.0\u003C/code\u003E.\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003ECompile Options: \u003Ccode\u003E--alwaysStrict --strictBindCallApply --strictFunctionTypes --target ES2022\u003C/code\u003E\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003EYour code is run with \u003Ccode\u003E--harmony\u003C/code\u003E flag, enabling \u003Ca href=\\\"http://node.green/\\\" target=\\\"_blank\\\"\u003Enew ES2022 features\u003C/a\u003E.\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003E\u003Ca href=\\\"https://lodash.com\\\" target=\\\"_blank\\\"\u003Elodash.js\u003C/a\u003E library is included by default.\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003EFor Priority Queue / Queue data structures, you may use 5.4.0 version of \u003Ca href=\\\"https://github.com/datastructures-js/priority-queue/blob/v5/README.md\\\" target=\\\"_blank\\\"\u003Edatastructures-js/priority-queue\u003C/a\u003E and 4.2.3 version of \u003Ca href=\\\"https://github.com/datastructures-js/queue/tree/v4.2.3\\\" target=\\\"_blank\\\"\u003Edatastructures-js/queue\u003C/a\u003E and 1.0.4 version of \u003Ca href=\\\"https://github.com/datastructures-js/deque/tree/v1.0.4\\\" target=\\\"_blank\\\"\u003Edatastructures-js/deque\u003C/a\u003E.\u003C/p\u003E\"], \"racket\": [\"Racket\", \"\u003Cp\u003E\u003Ca href=\\\"https://docs.racket-lang.org/guide/performance.html#%28tech._c%29\\\" target=\\\"_blank\\\"\u003ERacket CS\u003C/a\u003E v8.15\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003EUsing \u003Ccode\u003E#lang racket\u003C/code\u003E\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003ERequired \u003Ccode\u003Edata/gvector data/queue data/order data/heap\u003C/code\u003E automatically for your convenience\u003C/p\u003E\"], \"erlang\": [\"Erlang\", \"Erlang/OTP 26\"], \"elixir\": [\"Elixir\", \"Elixir 1.17 with Erlang/OTP 26\"], \"dart\": [\"Dart\", \"\u003Cp\u003EDart 3.2. You may use package \u003Ca href=\\\"https://pub.dev/packages/collection/versions/1.18.0\\\" target=\\\"_blank\\\"\u003Ecollection\u003C/a\u003E\u003C/p\u003E\\r\\n\\r\\n\u003Cp\u003EYour code will be run directly without compiling\u003C/p\u003E\"]}",
          "libraryUrl": null,
          "adminUrl": null,
          "challengeQuestion": {
            "id": "2053",
            "date": "2025-01-19",
            "incompleteChallengeCount": 0,
            "streakCount": 0,
            "type": "DAILY"
          },
          "note": null
        }
      }
    }
  }