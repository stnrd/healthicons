import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class WaterSanitation extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const WaterSanitation({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M42 6V12H23V8C23 6.89543 23.8954 6 25 6H42ZM25 8H40V10H25V8Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 39.7493V39.9961C13 41.1006 12.1046 41.9961 11 41.9961H8C6.89543 41.9961 6 41.1006 6 39.9961V29.0007C6 27.8962 6.89543 27.0007 8 27.0007H11C11.946 27.0007 12.7386 27.6575 12.9467 28.54C14.2711 28.0627 15.818 27.4946 16.2913 27.2788C16.6933 27.0957 17.1575 27.0335 17.5432 27.0112C17.9488 26.9878 18.3696 27.004 18.7378 27.0325C19.1092 27.0612 19.4463 27.1041 19.6897 27.1395C19.8119 27.1573 19.9119 27.1734 19.9824 27.1852C20.0177 27.1912 20.0457 27.196 20.0655 27.1996L20.089 27.2038L20.0959 27.2051L20.0995 27.2057L20.1174 27.2091L26.8062 28.7096L26.848 28.723L26.8594 28.7265L26.9055 28.7406C26.9476 28.7533 27.0115 28.772 27.0939 28.7948C27.259 28.8406 27.4964 28.9023 27.7794 28.964C28.3543 29.0894 29.0785 29.2065 29.7538 29.2065C30.3777 29.2065 31.0231 29.439 31.3681 30.0709C31.6644 30.6134 31.5954 31.2091 31.4845 31.6216C31.3464 32.135 31.0604 32.6753 30.6968 33.1343C31.1875 32.9492 31.7239 32.73 32.2997 32.4938L32.4228 32.4432C34.0458 31.7772 35.9703 30.9874 37.6678 30.7067C39.6075 30.3858 41.0193 31.0899 41.6593 32.3391C42.229 33.451 42.0967 34.9104 41.2393 35.7897C41.0241 36.0104 40.6962 36.2419 40.3669 36.4555C40.0153 36.6835 39.5822 36.9412 39.101 37.2141C38.1372 37.7608 36.9441 38.3892 35.7462 38.9967C33.3742 40.1997 30.8878 41.3696 30.0977 41.6589C29.1821 41.9943 28.1986 42.026 27.2528 41.9773C26.7376 41.9508 26.1391 41.8913 25.5442 41.8321C25.1144 41.7894 24.6866 41.7468 24.2935 41.7171C22.3657 41.571 20.8861 41.1005 19.5232 40.6671L19.3575 40.6144C17.9499 40.1676 16.6404 39.7713 14.9054 39.7014C14.5087 39.6854 13.7166 39.7145 13 39.7493ZM17.1208 29.0987C17.1849 29.0695 17.3549 29.0255 17.6585 29.0079C17.9421 28.9915 18.2657 29.0019 18.5835 29.0265C18.8981 29.0509 19.1889 29.0877 19.4018 29.1186C19.5076 29.134 19.5929 29.1478 19.6506 29.1575L19.6872 29.1637L19.7154 29.1687L19.7176 29.1691L26.2851 30.6424L26.3302 30.6561C26.3848 30.6725 26.4625 30.6952 26.5597 30.7222C26.7538 30.776 27.0277 30.847 27.3531 30.918C27.9383 31.0457 28.7223 31.1804 29.5215 31.2032C29.4645 31.3649 29.368 31.5558 29.2372 31.7459C29.0776 31.9779 28.9023 32.1573 28.7584 32.26C28.3418 32.5576 28.0056 32.6821 27.8015 32.7351C27.6982 32.7619 27.6255 32.7712 27.5896 32.7744L27.5756 32.7755L27.5685 32.7759L22.2065 32.7111L22.0151 34.6948L22.1944 33.711L22.0161 34.695L22.0693 34.7046L22.2218 34.732C22.3538 34.7557 22.5439 34.7895 22.7776 34.8304C23.2446 34.9122 23.8861 35.0224 24.5836 35.136C25.958 35.36 27.6146 35.6082 28.5545 35.6649C29.2036 35.7041 29.9596 35.5049 30.6627 35.2701C31.3964 35.0252 32.2252 34.6861 33.0587 34.3441C34.776 33.6397 36.5246 32.9229 37.9942 32.6799C39.2646 32.4697 39.7168 32.9338 39.8793 33.251C40.1121 33.7055 39.9855 34.2107 39.8074 34.3934C39.7637 34.4382 39.6062 34.565 39.2786 34.7775C38.9733 34.9755 38.578 35.2115 38.1143 35.4745C37.1882 35.9997 36.0255 36.6125 34.8416 37.213C32.4501 38.4259 30.0696 39.5393 29.4099 39.7809C28.8757 39.9766 28.2155 40.0242 27.3557 39.9799C26.8478 39.9538 26.366 39.9048 25.8407 39.8513C25.4161 39.8081 24.963 39.7621 24.4446 39.7228C22.7528 39.5946 21.4666 39.186 20.0883 38.7481L19.9627 38.7082C18.5351 38.255 17.0075 37.7844 14.9859 37.703C14.5308 37.6847 13.7206 37.7128 13 37.7469L13 30.646C14.4055 30.143 16.4871 29.3876 17.1208 29.0987ZM19.9162 28.1888L20.0995 27.2057C20.0997 27.2058 20.0995 27.2057 19.9162 28.1888ZM11 29.0007H8V39.9961H11V29.0007Z" fill="#333333"/>
<path d="M24 14C23.4477 14 23 14.4477 23 15C23 15.5523 23.4477 16 24 16H30C30.5523 16 31 15.5523 31 15C31 14.4477 30.5523 14 30 14H24Z" fill="#333333"/>
<path d="M27 18.1719C27.5523 18.1719 28 18.6196 28 19.1719V21.1719C28 21.7242 27.5523 22.1719 27 22.1719C26.4477 22.1719 26 21.7242 26 21.1719V19.1719C26 18.6196 26.4477 18.1719 27 18.1719Z" fill="#333333"/>
<path d="M31.1213 18.2929C30.7308 17.9024 30.0976 17.9024 29.7071 18.2929C29.3166 18.6834 29.3166 19.3166 29.7071 19.7071L31.1213 21.1213C31.5118 21.5119 32.145 21.5119 32.5355 21.1213C32.926 20.7308 32.926 20.0977 32.5355 19.7071L31.1213 18.2929Z" fill="#333333"/>
<path d="M21.2929 21.2929C20.9024 20.9024 20.9024 20.2692 21.2929 19.8787L22.7071 18.4645C23.0977 18.074 23.7308 18.074 24.1213 18.4645C24.5119 18.855 24.5119 19.4882 24.1213 19.8787L22.7071 21.2929C22.3166 21.6834 21.6834 21.6834 21.2929 21.2929Z" fill="#333333"/>
<path d="M28 24.1719C28 23.6196 27.5523 23.1719 27 23.1719C26.4477 23.1719 26 23.6196 26 24.1719V25.1719C26 25.7242 26.4477 26.1719 27 26.1719C27.5523 26.1719 28 25.7242 28 25.1719V24.1719Z" fill="#333333"/>
<path d="M33.2071 21.7929C33.5976 21.4024 34.2308 21.4024 34.6213 21.7929L36.0355 23.2071C36.426 23.5977 36.426 24.2308 36.0355 24.6213C35.645 25.0119 35.0118 25.0119 34.6213 24.6213L33.2071 23.2071C32.8166 22.8166 32.8166 22.1834 33.2071 21.7929Z" fill="#333333"/>
<path d="M17.7929 23.1287C17.4024 23.5192 17.4024 24.1524 17.7929 24.5429C18.1834 24.9334 18.8166 24.9334 19.2071 24.5429L20.6213 23.1287C21.0119 22.7382 21.0119 22.105 20.6213 21.7145C20.2308 21.324 19.5977 21.324 19.2071 21.7145L17.7929 23.1287Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}