import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class VirusMutation extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const VirusMutation({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM12.8567 8C12.3966 8 11.9338 8.20015 11.5766 8.59297C11.2166 8.98895 11 9.54473 11 10.1419V15.5858L12.2929 14.2929C12.6834 13.9024 13.3166 13.9024 13.7071 14.2929C14.0976 14.6834 14.0976 15.3166 13.7071 15.7071L10.7071 18.7071C10.5196 18.8946 10.2652 19 10 19C9.73478 19 9.48043 18.8946 9.29289 18.7071L6.29289 15.7071C5.90237 15.3166 5.90237 14.6834 6.29289 14.2929C6.68342 13.9024 7.31658 13.9024 7.70711 14.2929L9 15.5858V10.1419C9 9.07248 9.38539 8.02996 10.0968 7.24751C10.8111 6.46188 11.8015 6 12.8567 6H22.5C23.0523 6 23.5 6.44772 23.5 7C23.5 7.55228 23.0523 8 22.5 8H12.8567ZM29.5 40L35.1433 40C35.6034 40 36.0662 39.7998 36.4234 39.407C36.7834 39.0111 37 38.4553 37 37.8581V32.4142L35.7071 33.7071C35.3166 34.0976 34.6834 34.0976 34.2929 33.7071C33.9024 33.3166 33.9024 32.6834 34.2929 32.2929L37.2913 29.2945C37.4611 29.1239 37.6921 29.0143 37.9485 29.0013C37.9656 29.0004 37.9827 29 38 29C38.0191 29 38.0382 29.0005 38.057 29.0016C38.2764 29.0139 38.4769 29.097 38.6361 29.2283C38.6608 29.2487 38.6845 29.2703 38.7071 29.2929L41.7071 32.2929C42.0976 32.6834 42.0976 33.3166 41.7071 33.7071C41.3166 34.0976 40.6834 34.0976 40.2929 33.7071L39 32.4142V37.8581C39 38.9275 38.6146 39.97 37.9032 40.7525C37.1889 41.5381 36.1985 42 35.1433 42L29.5 42C28.9477 42 28.5 41.5523 28.5 41C28.5 40.4477 28.9477 40 29.5 40ZM18 37.9291C19.3469 37.7364 20.5702 37.1603 21.5556 36.3149L23.5371 38.0487L23.2929 38.2929C22.9024 38.6834 22.9024 39.3166 23.2929 39.7071C23.6834 40.0976 24.3166 40.0976 24.7071 39.7071L26.7071 37.7071C27.0976 37.3166 27.0976 36.6834 26.7071 36.2929C26.3166 35.9024 25.6834 35.9024 25.2929 36.2929L24.9544 36.6314L22.8731 34.8102C23.4137 33.9787 23.7825 33.0252 23.9291 32L26 32C26 32.5523 26.4477 33 27 33C27.5523 33 28 32.5523 28 32L28 31L28 30C28 29.4477 27.5523 29 27 29C26.4477 29 26 29.4477 26 30L23.9291 30C23.7595 28.8141 23.2926 27.7241 22.6064 26.8078L24 25.4142L24.2929 25.7071C24.6834 26.0976 25.3166 26.0976 25.7071 25.7071C26.0976 25.3166 26.0976 24.6834 25.7071 24.2929L23.7071 22.2929C23.3166 21.9024 22.6834 21.9024 22.2929 22.2929C21.9024 22.6834 21.9024 23.3166 22.2929 23.7071L22.5858 24L21.1922 25.3936C20.2759 24.7074 19.1859 24.2405 18 24.0709L18 22C18.5523 22 19 21.5523 19 21C19 20.4477 18.5523 20 18 20H16C15.4477 20 15 20.4477 15 21C15 21.5523 15.4477 22 16 22L16 24.0709C14.8141 24.2405 13.7241 24.7074 12.8078 25.3936L11.4142 24L11.7071 23.7071C12.0976 23.3166 12.0976 22.6834 11.7071 22.2929C11.3166 21.9024 10.6834 21.9024 10.2929 22.2929L8.2929 24.2929C7.90237 24.6834 7.90237 25.3166 8.2929 25.7071C8.68342 26.0976 9.31659 26.0976 9.70711 25.7071L9.99998 25.4142L11.3936 26.8078C10.7074 27.7241 10.2405 28.8141 10.0709 30L8 30C8 29.4477 7.55228 29 7 29C6.44772 29 6 29.4477 6 30V32C6 32.5523 6.44772 33 7 33C7.55228 33 8 32.5523 8 32L10.0709 32C10.2405 33.1859 10.7074 34.2759 11.3936 35.1922L10 36.5858L9.70711 36.2929C9.31659 35.9024 8.68342 35.9024 8.2929 36.2929C7.90237 36.6834 7.90237 37.3166 8.2929 37.7071L10.2929 39.7071C10.6834 40.0976 11.3166 40.0976 11.7071 39.7071C12.0976 39.3166 12.0976 38.6834 11.7071 38.2929L11.4142 38L12.8078 36.6064C13.7241 37.2926 14.8141 37.7595 16 37.9291L16 40C15.4477 40 15 40.4477 15 41C15 41.5523 15.4477 42 16 42H18C18.5523 42 19 41.5523 19 41C19 40.4477 18.5523 40 18 40L18 37.9291ZM34.9931 18.0819C35.5402 17.9493 36.0455 17.7095 36.4854 17.386L38.1579 18.9297C37.8027 19.3223 37.8144 19.9287 38.1929 20.3071C38.5834 20.6977 39.2166 20.6977 39.6071 20.3071L41.0071 18.9071C41.3976 18.5166 41.3976 17.8834 41.0071 17.4929C40.6166 17.1024 39.9834 17.1024 39.5929 17.4929L39.5723 17.5135L37.7711 15.8511C37.9043 15.5802 38.0092 15.293 38.0819 14.9931C38.1206 14.9977 38.16 15 38.2 15H40.0458C40.1732 15.4057 40.5522 15.7 41 15.7C41.5523 15.7 42 15.2523 42 14.7V13.3C42 12.7477 41.5523 12.3 41 12.3C40.5522 12.3 40.1732 12.5943 40.0458 13H38.2C38.16 13 38.1206 13.0023 38.0819 13.0069C37.9792 12.5833 37.8123 12.1848 37.592 11.8222L38.9 10.5142C39.2911 10.8976 39.919 10.8952 40.3071 10.5071C40.6976 10.1166 40.6976 9.48341 40.3071 9.09288L38.9071 7.69288C38.5166 7.30236 37.8834 7.30236 37.4929 7.69288C37.1047 8.08104 37.1024 8.70891 37.4858 9.09997L36.1778 10.408C35.8172 10.1889 35.4211 10.0226 35 9.91978V7.95422C35.4057 7.8268 35.7 7.44777 35.7 7C35.7 6.44772 35.2523 6 34.7 6H33.3C32.7477 6 32.3 6.44772 32.3 7C32.3 7.44776 32.5943 7.82679 33 7.95422V9.91979C32.5789 10.0226 32.1828 10.1889 31.8222 10.408L30.5142 9.09997C30.8976 8.7089 30.8953 8.08104 30.5071 7.69288C30.1166 7.30236 29.4834 7.30236 29.0929 7.69288L27.6929 9.09288C27.3024 9.48341 27.3024 10.1166 27.6929 10.5071C28.081 10.8952 28.7089 10.8976 29.1 10.5142L30.408 11.8222C30.1877 12.1848 30.0208 12.5833 29.9181 13.0069C29.8794 13.0023 29.84 13 29.8 13H27.9542C27.8268 12.5943 27.4478 12.3 27 12.3C26.4477 12.3 26 12.7477 26 13.3V14.7C26 15.2523 26.4477 15.7 27 15.7C27.4478 15.7 27.8268 15.4057 27.9542 15H29.8C29.84 15 29.8794 14.9977 29.9181 14.9931C30.0208 15.4167 30.1877 15.8152 30.408 16.1778L29.0999 17.4858C28.7089 17.1024 28.081 17.1048 27.6929 17.4929C27.3024 17.8834 27.3024 18.5166 27.6929 18.9071L29.0929 20.3071C29.4834 20.6977 30.1166 20.6977 30.5071 20.3071C30.8953 19.919 30.8976 19.2911 30.5142 18.9L31.8222 17.592C32.1847 17.8123 32.5833 17.9792 33.0069 18.0819C33.0023 18.1206 33 18.1601 33 18.2V20.0458C32.5943 20.1732 32.3 20.5522 32.3 21C32.3 21.5523 32.7477 22 33.3 22H33.9929L34 22L34.0071 22H34.7C35.2523 22 35.7 21.5523 35.7 21C35.7 20.5522 35.4057 20.1732 35 20.0458V18.2C35 18.1601 34.9977 18.1206 34.9931 18.0819Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}