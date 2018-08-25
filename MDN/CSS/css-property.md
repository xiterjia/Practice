### CSS 属性约定

##### CSS 属性例子

| Rule         | Note                                              | eg.                                | Match                                                                                  | No-Match   |
| ------------ | ------------------------------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------- | ---------- |
| <length>     | 某种值的类型或者是对另一个属性的引用              | <family-name><br /><length>        | Helvetica Neue、Helvetica、Microsoft YaHei、Arial、sans-serif 等 <br />1px、1em、10%等 |            |
| help me      | 只能按照给出关键词的顺序出现                      | help me                            | help me                                                                                | me help    |
| ( X \| Y )   | X 或 Y 必须出现其中之一，但 X、Y 不能同时出现     |                                    | X、Y、                                                                                 | X Y、Y X、 |
| ( X \|\| Y ) | X 或 Y 至少出现一个，可以同时出现，且必须保持顺序 |                                    | X、Y、X Y                                                                              | Y X、      |
|              |                                                   |                                    |                                                                                        |            |
| \*           | 表示前面的值或分组可以重复 0 或多次               | a\*                                | a、aa、aaa、                                                                           |            |
| +            | 表示前面的值或分组可以重复 1 或多次               | b+                                 |                                                                                        |            |
| ?            | 可选项，有或没有都可                              |                                    |                                                                                        |            |
| {M,N}        | 最少重复 M 次，最多重复 N 次                      |                                    |                                                                                        |            |
|              |                                                   |                                    |                                                                                        |            |
|              |                                                   |                                    |                                                                                        |            |
|              |                                                   |                                    |                                                                                        |            |
|              | give \|\| me \|\| liberty                         | **至少**选择一个，可以任意顺序使用 | give liberty、give me、liberty me give、give me liberty                                |            |
|              | [ I \| am ]? the \|\| walrus                      |                                    |                                                                                        |            |
|              |                                                   |                                    |                                                                                        |            |
