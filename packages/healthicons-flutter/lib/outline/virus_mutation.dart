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
<rect width="48" height="48" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8567 8C12.3966 8 11.9338 8.20015 11.5766 8.59297C11.2166 8.98895 11 9.54473 11 10.1419V18C11 18.5523 10.5523 19 10 19C9.44772 19 9 18.5523 9 18V10.1419C9 9.07248 9.38539 8.02996 10.0968 7.24751C10.8111 6.46188 11.8015 6 12.8567 6H22.5C23.0523 6 23.5 6.44772 23.5 7C23.5 7.55228 23.0523 8 22.5 8H12.8567Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 14.2929C6.68342 13.9024 7.31658 13.9024 7.70711 14.2929L10 16.5858L12.2929 14.2929C12.6834 13.9024 13.3166 13.9024 13.7071 14.2929C14.0976 14.6834 14.0976 15.3166 13.7071 15.7071L10.7071 18.7071C10.5196 18.8946 10.2652 19 10 19C9.73478 19 9.48043 18.8946 9.29289 18.7071L6.29289 15.7071C5.90237 15.3166 5.90237 14.6834 6.29289 14.2929Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.5 40L35.1433 40C35.6034 40 36.0662 39.7998 36.4234 39.407C36.7834 39.0111 37 38.4553 37 37.8581L37 30C37 29.4477 37.4477 29 38 29C38.5523 29 39 29.4477 39 30V37.8581C39 38.9275 38.6146 39.97 37.9032 40.7525C37.1889 41.5381 36.1985 42 35.1433 42L29.5 42C28.9477 42 28.5 41.5523 28.5 41C28.5 40.4477 28.9477 40 29.5 40Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.7071 33.7071C41.3166 34.0976 40.6834 34.0976 40.2929 33.7071L38 31.4142L35.7071 33.7071C35.3166 34.0976 34.6834 34.0976 34.2929 33.7071C33.9024 33.3166 33.9024 32.6834 34.2929 32.2929L37.2929 29.2929C37.4804 29.1054 37.7348 29 38 29C38.2652 29 38.5196 29.1054 38.7071 29.2929L41.7071 32.2929C42.0976 32.6834 42.0976 33.3166 41.7071 33.7071Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 26C14.2386 26 12 28.2386 12 31C12 33.7614 14.2386 36 17 36C19.7614 36 22 33.7614 22 31C22 28.2386 19.7614 26 17 26ZM10 31C10 27.134 13.134 24 17 24C20.866 24 24 27.134 24 31C24 34.866 20.866 38 17 38C13.134 38 10 34.866 10 31Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 21C15 20.4477 15.4477 20 16 20H18C18.5523 20 19 20.4477 19 21C19 21.5523 18.5523 22 18 22H16C15.4477 22 15 21.5523 15 21Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.2929 22.2929C22.6834 21.9024 23.3166 21.9024 23.7071 22.2929L25.7071 24.2929C26.0976 24.6834 26.0976 25.3166 25.7071 25.7071C25.3166 26.0976 24.6834 26.0976 24.2929 25.7071L22.2929 23.7071C21.9024 23.3166 21.9024 22.6834 22.2929 22.2929Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2929 26.2929L23.2929 23.2929L24.7071 24.7071L21.7071 27.7071L20.2929 26.2929Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 29C27.5523 29 28 29.4477 28 30V32C28 32.5523 27.5523 33 27 33C26.4477 33 26 32.5523 26 32V30C26 29.4477 26.4477 29 27 29Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 31C22 30.4477 22.4477 30 23 30H27C27.5523 30 28 30.4477 28 31C28 31.5523 27.5523 32 27 32H23C22.4477 32 22 31.5523 22 31Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.7071 36.2929C27.0976 36.6834 27.0976 37.3166 26.7071 37.7071L24.7071 39.7071C24.3166 40.0976 23.6834 40.0976 23.2929 39.7071C22.9024 39.3166 22.9024 38.6834 23.2929 38.2929L25.2929 36.2929C25.6834 35.9024 26.3166 35.9024 26.7071 36.2929Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.7071 34.2929L25.7071 37.2929L24.2929 38.7071L21.2929 35.7071L22.7071 34.2929Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 41C15 40.4477 15.4477 40 16 40H18C18.5523 40 19 40.4477 19 41C19 41.5523 18.5523 42 18 42H16C15.4477 42 15 41.5523 15 41Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 36C17.5523 36 18 36.4477 18 37V41C18 41.5523 17.5523 42 17 42C16.4477 42 16 41.5523 16 41V37C16 36.4477 16.4477 36 17 36Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.2929 36.2929C8.68342 35.9024 9.31659 35.9024 9.70711 36.2929L11.7071 38.2929C12.0976 38.6834 12.0976 39.3166 11.7071 39.7071C11.3166 40.0976 10.6834 40.0976 10.2929 39.7071L8.2929 37.7071C7.90237 37.3166 7.90237 36.6834 8.2929 36.2929Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 35.7071L10.7071 38.7071L9.29289 37.2929L12.2929 34.2929L13.7071 35.7071Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 29C7.55228 29 8 29.4477 8 30V32C8 32.5523 7.55228 33 7 33C6.44772 33 6 32.5523 6 32V30C6 29.4477 6.44772 29 7 29Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 31C6 30.4477 6.44772 30 7 30H11C11.5523 30 12 30.4477 12 31C12 31.5523 11.5523 32 11 32H7C6.44772 32 6 31.5523 6 31Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 22.2929C12.0976 22.6834 12.0976 23.3166 11.7071 23.7071L9.70711 25.7071C9.31659 26.0976 8.68342 26.0976 8.2929 25.7071C7.90237 25.3166 7.90237 24.6834 8.2929 24.2929L10.2929 22.2929C10.6834 21.9024 11.3166 21.9024 11.7071 22.2929Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 27.7071L9.29289 24.7071L10.7071 23.2929L13.7071 26.2929L12.2929 27.7071Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 21V25.0909H16V21H18Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34 10.8C32.2327 10.8 30.8 12.2327 30.8 14C30.8 15.7673 32.2327 17.2 34 17.2C35.7673 17.2 37.2 15.7673 37.2 14C37.2 12.2327 35.7673 10.8 34 10.8ZM28.8 14C28.8 11.1281 31.1281 8.80001 34 8.80001C36.8719 8.80001 39.2 11.1281 39.2 14C39.2 16.8719 36.8719 19.2 34 19.2C31.1281 19.2 28.8 16.8719 28.8 14Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.3 7C32.3 6.44772 32.7477 6 33.3 6H34.7C35.2523 6 35.7 6.44772 35.7 7C35.7 7.55228 35.2523 8 34.7 8H33.3C32.7477 8 32.3 7.55228 32.3 7Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33 10.5V7.69999H35V10.5H33Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.4929 7.69288C37.8834 7.30236 38.5166 7.30236 38.9071 7.69288L40.3071 9.09288C40.6976 9.48341 40.6976 10.1166 40.3071 10.5071C39.9166 10.8976 39.2834 10.8976 38.8929 10.5071L37.4929 9.10709C37.1024 8.71657 37.1024 8.08341 37.4929 7.69288Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.0929 10.4929L38.1929 8.39291L39.6071 9.80712L37.5071 11.9071L36.0929 10.4929Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41 12.3C41.5523 12.3 42 12.7477 42 13.3V14.7C42 15.2523 41.5523 15.7 41 15.7C40.4477 15.7 40 15.2523 40 14.7V13.3C40 12.7477 40.4477 12.3 41 12.3Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.2 14C37.2 13.4477 37.6477 13 38.2 13H41C41.5523 13 42 13.4477 42 14C42 14.5523 41.5523 15 41 15H38.2C37.6477 15 37.2 14.5523 37.2 14Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.0071 17.4929C41.3976 17.8834 41.3976 18.5166 41.0071 18.9071L39.6071 20.3071C39.2166 20.6977 38.5834 20.6977 38.1929 20.3071C37.8024 19.9166 37.8024 19.2834 38.1929 18.8929L39.5929 17.4929C39.9834 17.1024 40.6166 17.1024 41.0071 17.4929Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.2071 16.0929L40.3071 18.1929L38.8929 19.6071L36.7929 17.5071L38.2071 16.0929Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.3 21C32.3 20.4477 32.7477 20 33.3 20H34.7C35.2523 20 35.7 20.4477 35.7 21C35.7 21.5523 35.2523 22 34.7 22H33.3C32.7477 22 32.3 21.5523 32.3 21Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34 17.2C34.5523 17.2 35 17.6477 35 18.2V21C35 21.5523 34.5523 22 34 22C33.4477 22 33 21.5523 33 21V18.2C33 17.6477 33.4477 17.2 34 17.2Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.6929 17.4929C28.0834 17.1024 28.7166 17.1024 29.1071 17.4929L30.5071 18.8929C30.8976 19.2834 30.8976 19.9166 30.5071 20.3071C30.1166 20.6977 29.4834 20.6977 29.0929 20.3071L27.6929 18.9071C27.3024 18.5166 27.3024 17.8834 27.6929 17.4929Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.9071 17.5071L29.8071 19.6071L28.3929 18.1929L30.4929 16.0929L31.9071 17.5071Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 12.3C27.5523 12.3 28 12.7477 28 13.3V14.7C28 15.2523 27.5523 15.7 27 15.7C26.4477 15.7 26 15.2523 26 14.7V13.3C26 12.7477 26.4477 12.3 27 12.3Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 14C26 13.4477 26.4477 13 27 13H29.8C30.3523 13 30.8 13.4477 30.8 14C30.8 14.5523 30.3523 15 29.8 15H27C26.4477 15 26 14.5523 26 14Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.5071 7.69288C30.8976 8.08341 30.8976 8.71657 30.5071 9.10709L29.1071 10.5071C28.7166 10.8976 28.0834 10.8976 27.6929 10.5071C27.3024 10.1166 27.3024 9.48341 27.6929 9.09288L29.0929 7.69288C29.4834 7.30236 30.1166 7.30236 30.5071 7.69288Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.4929 11.9071L28.3929 9.80712L29.8071 8.39291L31.9071 10.4929L30.4929 11.9071Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}