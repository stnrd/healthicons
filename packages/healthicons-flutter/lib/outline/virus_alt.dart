import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class VirusAlt extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const VirusAlt({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.3999 5.8999C19.8476 5.8999 19.3999 6.34762 19.3999 6.8999C19.3999 7.45219 19.8476 7.8999 20.3999 7.8999H22.9999V10.4361C19.9963 10.6544 17.2633 11.8481 15.1162 13.702L13.2641 11.8499L14.807 10.307C15.1975 9.91648 15.1975 9.28332 14.807 8.8928C14.4165 8.50227 13.7833 8.50227 13.3928 8.8928L8.8928 13.3928C8.50227 13.7833 8.50227 14.4165 8.8928 14.807C9.28332 15.1975 9.91649 15.1975 10.307 14.807L11.8499 13.2641L13.702 15.1162C11.8481 17.2633 10.6544 19.9963 10.4361 22.9999H7.8999L7.8999 20.3999C7.8999 19.8476 7.45219 19.3999 6.8999 19.3999C6.34762 19.3999 5.8999 19.8476 5.8999 20.3999V27.5999C5.8999 28.1522 6.34762 28.5999 6.8999 28.5999C7.45219 28.5999 7.8999 28.1522 7.8999 27.5999L7.8999 24.9999H10.4361C10.6544 28.0035 11.8481 30.7365 13.702 32.8836L11.8499 34.7357L10.307 33.1928C9.91649 32.8023 9.28332 32.8023 8.8928 33.1928C8.50227 33.5833 8.50227 34.2165 8.8928 34.607L13.3928 39.107C13.7833 39.4975 14.4165 39.4975 14.807 39.107C15.1975 38.7165 15.1975 38.0833 14.807 37.6928L13.2641 36.1499L15.1162 34.2978C17.2633 36.1517 19.9963 37.3454 22.9999 37.5637V40.0999H20.3999C19.8476 40.0999 19.3999 40.5476 19.3999 41.0999C19.3999 41.6522 19.8476 42.0999 20.3999 42.0999H27.5999C28.1522 42.0999 28.5999 41.6522 28.5999 41.0999C28.5999 40.5476 28.1522 40.0999 27.5999 40.0999H24.9999V37.5637C28.0035 37.3454 30.7365 36.1517 32.8836 34.2978L34.7357 36.1499L33.1928 37.6928C32.8023 38.0833 32.8023 38.7165 33.1928 39.107C33.5833 39.4975 34.2165 39.4975 34.607 39.107L39.107 34.607C39.4975 34.2165 39.4975 33.5833 39.107 33.1928C38.7165 32.8023 38.0833 32.8023 37.6928 33.1928L36.1499 34.7357L34.2978 32.8836C36.1517 30.7365 37.3454 28.0035 37.5637 24.9999H40.0999V27.5999C40.0999 28.1522 40.5476 28.5999 41.0999 28.5999C41.6522 28.5999 42.0999 28.1522 42.0999 27.5999V20.3999C42.0999 19.8476 41.6522 19.3999 41.0999 19.3999C40.5476 19.3999 40.0999 19.8476 40.0999 20.3999V22.9999H37.5637C37.3454 19.9963 36.1517 17.2633 34.2978 15.1162L36.1499 13.2641L37.6928 14.807C38.0833 15.1975 38.7165 15.1975 39.107 14.807C39.4975 14.4165 39.4975 13.7833 39.107 13.3928L34.607 8.8928C34.2165 8.50227 33.5833 8.50227 33.1928 8.8928C32.8023 9.28332 32.8023 9.91648 33.1928 10.307L34.7357 11.8499L32.8836 13.702C30.7365 11.8481 28.0035 10.6544 24.9999 10.4361V7.8999H27.5999C28.1522 7.8999 28.5999 7.45219 28.5999 6.8999C28.5999 6.34762 28.1522 5.8999 27.5999 5.8999H20.3999ZM23.9999 12.3999C30.4064 12.3999 35.5999 17.5934 35.5999 23.9999C35.5999 30.4064 30.4064 35.5999 23.9999 35.5999C17.5934 35.5999 12.3999 30.4064 12.3999 23.9999C12.3999 17.5934 17.5934 12.3999 23.9999 12.3999ZM30.3999 23.5499C30.3999 23.3566 30.5566 23.1999 30.7499 23.1999C30.9432 23.1999 31.0999 23.3566 31.0999 23.5499C31.0999 23.7432 30.9432 23.8999 30.7499 23.8999C30.5566 23.8999 30.3999 23.7432 30.3999 23.5499ZM30.7499 21.1999C29.452 21.1999 28.3999 22.252 28.3999 23.5499C28.3999 24.8478 29.452 25.8999 30.7499 25.8999C32.0478 25.8999 33.0999 24.8478 33.0999 23.5499C33.0999 22.252 32.0478 21.1999 30.7499 21.1999ZM24.4499 30.3999C24.2566 30.3999 24.0999 30.5566 24.0999 30.7499C24.0999 30.9432 24.2566 31.0999 24.4499 31.0999C24.6432 31.0999 24.7999 30.9432 24.7999 30.7499C24.7999 30.5566 24.6432 30.3999 24.4499 30.3999ZM22.0999 30.7499C22.0999 29.452 23.152 28.3999 24.4499 28.3999C25.7478 28.3999 26.7999 29.452 26.7999 30.7499C26.7999 32.0478 25.7478 33.0999 24.4499 33.0999C23.152 33.0999 22.0999 32.0478 22.0999 30.7499ZM18.6999 20.3999C18.6999 19.461 19.461 18.6999 20.3999 18.6999C21.3388 18.6999 22.0999 19.461 22.0999 20.3999C22.0999 21.3388 21.3388 22.0999 20.3999 22.0999C19.461 22.0999 18.6999 21.3388 18.6999 20.3999ZM20.3999 16.6999C18.3564 16.6999 16.6999 18.3564 16.6999 20.3999C16.6999 22.4434 18.3564 24.0999 20.3999 24.0999C22.4434 24.0999 24.0999 22.4434 24.0999 20.3999C24.0999 18.3564 22.4434 16.6999 20.3999 16.6999Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}