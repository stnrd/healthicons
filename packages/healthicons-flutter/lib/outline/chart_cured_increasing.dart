import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ChartCuredIncreasing extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ChartCuredIncreasing({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.1808 14.0165C38.724 14.1164 39.0834 14.6377 38.9835 15.1808C37.5257 23.1093 34.0067 28.607 29.0476 32.1024C24.1117 35.5814 17.8585 37 11.0523 37H7C6.44772 37 6 36.5523 6 36C6 35.4477 6.44772 35 7 35H11.0523C17.6037 35 23.406 33.6319 27.8954 30.4676C32.3616 27.3197 35.6378 22.3173 37.0165 14.8192C37.1164 14.276 37.6377 13.9166 38.1808 14.0165Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.6157 13.0294C38.893 13.0982 39.1276 13.2822 39.2604 13.5352L41.8854 18.5352C42.1421 19.0242 41.9538 19.6287 41.4648 19.8854C40.9758 20.1421 40.3713 19.9538 40.1146 19.4648L38.0126 15.461L34.5655 17.8247C34.11 18.1371 33.4876 18.021 33.1753 17.5655C32.8629 17.11 32.979 16.4876 33.4345 16.1753L37.8095 13.1753C38.0451 13.0137 38.3385 12.9606 38.6157 13.0294Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6V40H42V42H7C6.44772 42 6 41.5523 6 41V6H8Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.0725 6.73921C17.5458 6.2659 18.1878 6 18.8571 6H21.1429C21.8122 6 22.4542 6.2659 22.9275 6.73921C23.4008 7.21251 23.6667 7.85445 23.6667 8.52381V11.3333H26.4762C27.1455 11.3333 27.7875 11.5992 28.2608 12.0725C28.7341 12.5458 29 13.1878 29 13.8571V16.1429C29 16.8122 28.7341 17.4542 28.2608 17.9275C27.7875 18.4008 27.1455 18.6667 26.4762 18.6667H23.6667V21.4762C23.6667 22.1455 23.4008 22.7875 22.9275 23.2608C22.4542 23.7341 21.8122 24 21.1429 24H18.8571C18.1878 24 17.5458 23.7341 17.0725 23.2608C16.5992 22.7875 16.3333 22.1455 16.3333 21.4762V18.6667H13.5238C12.8545 18.6667 12.2125 18.4008 11.7392 17.9275C11.2659 17.4542 11 16.8122 11 16.1429V13.8571C11 13.1878 11.2659 12.5458 11.7392 12.0725C12.2125 11.5992 12.8545 11.3333 13.5238 11.3333H16.3333V8.52381C16.3333 7.85445 16.5992 7.21251 17.0725 6.73921ZM18.8571 8C18.7182 8 18.585 8.05519 18.4868 8.15342C18.3885 8.25165 18.3333 8.38489 18.3333 8.52381V12.3333C18.3333 12.8856 17.8856 13.3333 17.3333 13.3333H13.5238C13.3849 13.3333 13.2517 13.3885 13.1534 13.4868C13.0552 13.585 13 13.7182 13 13.8571V16.1429C13 16.2818 13.0552 16.415 13.1534 16.5132C13.2517 16.6115 13.3849 16.6667 13.5238 16.6667H17.3333C17.8856 16.6667 18.3333 17.1144 18.3333 17.6667V21.4762C18.3333 21.6151 18.3885 21.7483 18.4868 21.8466C18.585 21.9448 18.7182 22 18.8571 22H21.1429C21.2818 22 21.415 21.9448 21.5132 21.8466C21.6115 21.7483 21.6667 21.6151 21.6667 21.4762V17.6667C21.6667 17.1144 22.1144 16.6667 22.6667 16.6667H26.4762C26.6151 16.6667 26.7483 16.6115 26.8466 16.5132C26.9448 16.415 27 16.2818 27 16.1429V13.8571C27 13.7182 26.9448 13.585 26.8466 13.4868C26.7483 13.3885 26.6151 13.3333 26.4762 13.3333H22.6667C22.1144 13.3333 21.6667 12.8856 21.6667 12.3333V8.52381C21.6667 8.38489 21.6115 8.25165 21.5132 8.15342C21.415 8.05519 21.2818 8 21.1429 8H18.8571Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}