import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RdtResultPvInvalidRectangular extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const RdtResultPvInvalidRectangular({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.000854492H48V48.0009H0V0.000854492ZM6 29.9999C4.89543 29.9999 4 29.1044 4 27.9999L4 19.9999C4 18.8953 4.89543 17.9999 6 17.9999L42 17.9999C43.1046 17.9999 44 18.8953 44 19.9999V27.9999C44 29.1044 43.1046 29.9999 42 29.9999L6 29.9999ZM38 21.9999C39.1046 21.9999 40 22.8953 40 23.9999C40 25.1044 39.1046 25.9999 38 25.9999C36.8954 25.9999 36 25.1044 36 23.9999C36 22.8953 36.8954 21.9999 38 21.9999ZM31 23.9999C31 24.8283 31.6716 25.4999 32.5 25.4999C33.3284 25.4999 34 24.8283 34 23.9999C34 23.1714 33.3284 22.4999 32.5 22.4999C31.6716 22.4999 31 23.1714 31 23.9999ZM18 22.9999H11C10.4477 22.9999 10 23.4476 10 23.9999C10 24.5522 10.4477 24.9999 11 24.9999H18V22.9999ZM20 24.9999L26 24.9999C26.5523 24.9999 27 24.5522 27 23.9999C27 23.4476 26.5523 22.9999 26 22.9999H20V24.9999ZM8 23.9999C8 25.6567 9.34315 26.9999 11 26.9999H26C27.6569 26.9999 29 25.6567 29 23.9999C29 22.343 27.6569 20.9999 26 20.9999H11C9.34315 20.9999 8 22.343 8 23.9999ZM10.8507 11.1048C11.0882 10.9999 11.3453 10.9736 11.5927 11.0261C11.8406 11.0788 12.0778 11.2105 12.2704 11.416C12.6481 11.8189 13.2809 11.8394 13.6838 11.4617C14.0868 11.0841 14.1073 10.4512 13.7296 10.0483C13.2668 9.55442 12.669 9.21001 12.0079 9.0697C11.3462 8.92927 10.6611 9.00204 10.0422 9.27552C9.42437 9.54858 8.90684 10.0062 8.54737 10.5802C8.18825 11.1536 8 11.8215 8 12.4999C8 13.1782 8.18825 13.8461 8.54737 14.4196C8.90684 14.9936 9.42437 15.4512 10.0422 15.7242C10.6611 15.9977 11.3462 16.0705 12.0079 15.9301C12.669 15.7897 13.2668 15.4453 13.7296 14.9515C14.1073 14.5485 14.0868 13.9157 13.6838 13.538C13.2809 13.1603 12.6481 13.1808 12.2704 13.5838C12.0778 13.7892 11.8406 13.921 11.5927 13.9736C11.3453 14.0261 11.0882 13.9999 10.8507 13.8949C10.6123 13.7895 10.3979 13.6063 10.2424 13.358C10.0866 13.1092 10 12.8104 10 12.4999C10 12.1893 10.0866 11.8905 10.2424 11.6417C10.3979 11.3935 10.6123 11.2102 10.8507 11.1048ZM13 32.9999C13 32.4476 13.4477 31.9999 14 31.9999H16.5C17.8807 31.9999 19 33.1192 19 34.4999C19 35.8806 17.8807 36.9999 16.5 36.9999H15V37.9999C15 38.5522 14.5523 38.9999 14 38.9999C13.4477 38.9999 13 38.5522 13 37.9999V32.9999ZM15 34.9999H16.5C16.7761 34.9999 17 34.776 17 34.4999C17 34.2237 16.7761 33.9999 16.5 33.9999H15V34.9999ZM28 8.99988C27.4477 8.99988 27 9.44759 27 9.99988V14.9999C27 15.5522 27.4477 15.9999 28 15.9999C28.5523 15.9999 29 15.5522 29 14.9999V13.9999H30.5C31.8807 13.9999 33 12.8806 33 11.4999C33 10.1192 31.8807 8.99988 30.5 8.99988H28ZM30.5 11.9999H29V10.9999H30.5C30.7761 10.9999 31 11.2237 31 11.4999C31 11.776 30.7761 11.9999 30.5 11.9999ZM22.4999 38.9999C22.9168 38.9999 23.2899 38.7413 23.4363 38.351L24.9363 34.351C25.1303 33.8339 24.8683 33.2575 24.3511 33.0636C23.834 32.8696 23.2576 33.1316 23.0637 33.6487L22.5 35.1519L21.9363 33.6488C21.7424 33.1316 21.166 32.8696 20.6489 33.0635C20.1318 33.2575 19.8698 33.8339 20.0637 34.351L21.5636 38.351C21.71 38.7413 22.0831 38.9999 22.4999 38.9999ZM35 15.9999C35.5523 15.9999 36 15.5522 36 14.9999V12.9999C36.5523 12.9999 37 12.5522 37 11.9999C37 11.4478 36.5526 11.0001 36.0005 10.9999C36.5526 10.9996 37 10.552 37 9.99988C37 9.44759 36.5523 8.99988 36 8.99988C35.2741 8.99988 34.7239 9.32474 34.3885 9.79057C34.0898 10.2054 34 10.6732 34 10.9999C33.4477 10.9999 33 11.4476 33 11.9999C33 12.5522 33.4477 12.9999 34 12.9999V14.9999C34 15.5522 34.4477 15.9999 35 15.9999Z" fill="#333333"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}