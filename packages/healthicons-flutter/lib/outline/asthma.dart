import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Asthma extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Asthma({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99994 8C6.69066 8 6.38458 8.01274 6.08216 8.03769L5.91772 6.04446C6.27477 6.015 6.63572 6 6.99994 6C14.1796 6 19.9999 11.8203 19.9999 19V20.6972L22.7955 24.8906C23.6816 26.2197 22.7288 28 21.1314 28H19.9999V30C19.9999 30.5523 19.5522 31 18.9999 31H17.9999C16.8954 31 15.9999 31.8954 15.9999 33H18.9999C19.5522 33 19.9999 33.4477 19.9999 34V37C19.9999 38.4477 19.2303 39.7147 18.0826 40.4156C17.3678 40.8521 16.5993 40.9101 15.9221 40.8209C15.2573 40.7333 14.6205 40.4968 14.0967 40.2723L9.99994 38.5165V43H7.99994V37C7.99994 36.6639 8.16883 36.3502 8.44945 36.1652C8.73008 35.9801 9.0849 35.9484 9.39386 36.0809L14.8846 38.434C15.3566 38.6363 15.7929 38.7866 16.1833 38.838C16.5613 38.8878 16.8303 38.8369 17.0401 38.7087C17.6179 38.3559 17.9999 37.7221 17.9999 37V35H14.9999C14.4477 35 13.9999 34.5523 13.9999 34V33C13.9999 30.7909 15.7908 29 17.9999 29V27C17.9999 26.4477 18.4477 26 18.9999 26L21.1314 26L18.1679 21.5547C18.0584 21.3904 17.9999 21.1974 17.9999 21V19C17.9999 12.9249 13.0751 8 6.99994 8Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.7201 15.034C36.1873 14.8919 35.6399 15.2079 35.4966 15.7404L35.0044 17.5697C34.7386 17.4511 34.4343 17.4542 34.1709 17.5782C33.9058 17.7031 33.7087 17.9379 33.6319 18.2208L31.2468 27.0002H28C27.4478 27.0002 27.0001 27.4478 27 28H25C24.4477 28 24 28.4477 24 29V34C24 34.5523 24.4477 35 25 35H27C27 35.5523 27.4477 36.0002 28 36.0002H34.204C36.4544 36.0002 38.4275 34.4969 39.0247 32.3272L41.9641 21.6488C42.0947 21.1744 41.8608 20.6755 41.4126 20.4725L41.1192 20.3396L41.8962 17.4522C41.9652 17.1958 41.9293 16.9224 41.7966 16.6924C41.6638 16.4624 41.4449 16.2946 41.1883 16.2262L36.7201 15.034ZM29 34.0002H34.204C35.5542 34.0002 36.7381 33.0982 37.0964 31.7964L39.7764 22.0604L35.2239 19.9894L32.9764 28.2624C32.858 28.6979 32.4626 29.0002 32.0113 29.0002H29V34.0002ZM36.8202 18.5183L39.2417 19.6199L39.7045 17.9002L37.1686 17.2237L36.8202 18.5183ZM26 30H27V33H26V30Z" fill="#333333"/>
<path d="M14.5 23C15.3284 23 16 22.3284 16 21.5C16 20.6716 15.3284 20 14.5 20C13.6716 20 13 20.6716 13 21.5C13 22.3284 13.6716 23 14.5 23Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}