const StartPage = {
    id: "startPage",
    title: "Start Page",
    renderHeader: (className = "container", ...rest) => {
        return `
        <header class="${className} header">
        <div>
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" class="svgLogo">
        <defs>
        <linearGradient gradientUnits="userSpaceOnUse" x1="135.967" y1="181.797" x2="135.967" y2="230.408" id="gradient-0" gradientTransform="matrix(0.992105, 4.148152, -1.357964, 0.275817, 300.880717, -291.924816)">
          <stop offset="0" style="stop-color: rgb(250, 207, 100);"/>
          <stop offset="1" style="stop-color: rgba(244, 175, 0, 1)"/>
        </linearGradient>
      </defs>
      <path d="M429.666,22.73c-108-77.849-215.982,73.553-323.981,20.898V32.427c0-13.911-11.286-25.197-25.196-25.197
	c-13.91,0-25.194,11.286-25.194,25.197V466.13c0,13.909,11.284,25.195,25.194,25.195c13.91,0,25.196-11.286,25.196-25.195V282.395
	c102.651,50.03,205.304-84.264,307.973-30.821c4.739,2.477,10.433,2.313,15.007-0.477c4.578-2.771,7.367-7.725,7.367-13.09
	c0-67.612,0-135.228,0-202.859C436.031,30.245,433.65,25.6,429.666,22.73z" style="fill: url(#gradient-0);"/>
    <text x="25%" y="90%" class="letter-l">l</text>
    <text x="31%" y="90%" class="letter-a">a</text>
    <text x="42%" y="90%" class="letter-g1">g</text>
    <text x="54%" y="90%" class="letter-g2">g</text>
    <text x="66%" y="90%" class="letter-y">y</text>
    </svg>
        </div>
        <nav class="${className} headerNav">
          <ul class="${className} headerNav__list">
            <li>
                <a class="${className} headerNav__link" href="#highscores">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" class="svg-highscores">
<g>
	<g>
		<g>
			<path style="fill:#83B832;" d="M343.521,375.355c-3.413,0-6.535-2.279-7.459-5.732c-1.102-4.122,1.346-8.357,5.468-9.46
				c34.93-9.342,62.441-26.369,81.767-50.609c15.507-19.45,25.923-43.673,30.959-71.998c8.718-49.031-1.845-93.797-1.953-94.243
				c-1.001-4.146,1.547-8.321,5.693-9.324c4.147-1.006,8.319,1.54,9.325,5.685c0.469,1.934,11.388,47.954,2.234,100.103
				c-8.582,48.892-37.066,112.056-124.034,135.314C344.853,375.27,344.182,375.355,343.521,375.355z"/>
			<g>
				<path style="fill:#BDEB73;" d="M470.206,84.412c4.01,25.172,0.107,60.053-11.273,61.866c-11.381,1.813-25.93-30.128-29.94-55.3
					s4.037-34.042,15.417-35.855C455.791,53.31,466.196,59.24,470.206,84.412z"/>
			</g>
			<g>
				<path style="fill:#9AD63B;" d="M458.931,146.273c-2.648,0.425-5.475-0.986-8.305-3.72c5.616-11.846,7.021-35.979,4.033-54.734
					c-3.175-19.906-10.348-27.774-18.844-29.302c2.474-1.819,5.4-2.892,8.596-3.395c11.381-1.807,21.788,4.119,25.798,29.288
					C474.217,109.588,470.312,144.465,458.931,146.273z"/>
			</g>
			<g>
				<path style="fill:#8EC737;" d="M461.777,241.712c-5.597,2.786-15.057-3.629-24.351-13.716
					c-7.838-8.518-15.565-19.641-20.768-30.082c-11.364-22.826-6.342-33.69,3.976-38.832c10.025-4.989,21.364-2.723,32.429,18.37
					c0.325,0.601,0.636,1.219,0.954,1.86C465.374,202.126,472.095,236.57,461.777,241.712z"/>
				<path style="fill:#83B832;" d="M461.777,241.712c-5.597,2.786-15.057-3.629-24.351-13.716c0.16-4.339,0.835-9.152,2.019-14.418
					c2.633-11.736,7.617-24.883,13.619-36.127c0.325,0.601,0.636,1.219,0.954,1.86C465.374,202.126,472.095,236.57,461.777,241.712z
					"/>
				<path style="fill:#BDEB73;" d="M467.961,179.814c-12.988,21.932-22.188,55.804-12.272,61.676
					c9.916,5.872,35.193-18.479,48.181-40.411s8.767-33.14-1.149-39.012C492.805,156.194,480.948,157.882,467.961,179.814z"/>
				<path style="fill:#9AD63B;" d="M503.871,201.081c-12.991,21.926-38.261,46.279-48.186,40.408
					c-2.313-1.361-3.577-4.25-4.007-8.15c11.886-5.429,28.492-23.201,38.214-39.613c10.237-17.295,9.782-27.915,4.271-34.515
					c2.988,0.209,5.85,1.247,8.56,2.852C512.637,167.943,516.854,179.144,503.871,201.081z"/>
			</g>
			<g>
				<path style="fill:#8EC737;" d="M418.323,338.369c-6.245,0.355-12.399-9.281-16.955-22.223
					c-3.848-10.911-6.551-24.192-7.215-35.833c-1.439-25.444,7.468-33.459,18.973-34.107c11.194-0.63,20.72,5.93,22.559,29.691
					c0.055,0.676,0.098,1.36,0.138,2.065C437.251,303.413,429.83,337.712,418.323,338.369z"/>
				<path style="fill:#83B832;" d="M418.323,338.369c-6.245,0.355-12.399-9.281-16.955-22.223c1.851-3.928,4.367-8.078,7.537-12.45
					c7.06-9.746,16.827-19.845,26.78-27.799c0.055,0.676,0.098,1.36,0.138,2.065C437.251,303.413,429.83,337.712,418.323,338.369z"
					/>
				<path style="fill:#BDEB73;" d="M448.433,283.932c-20.589,15.027-42.409,42.518-35.616,51.827
					c6.794,9.309,39.63-3.09,60.218-18.117c20.589-15.027,21.134-26.99,14.34-36.299
					C480.582,272.034,469.021,268.905,448.433,283.932z"/>
				<path style="fill:#9AD63B;" d="M473.036,317.638c-20.592,15.029-53.423,27.427-60.219,18.119
					c-1.049-1.436-1.415-3.315-1.202-5.512c13.282-1.482,33.518-10.658,47.837-21.102c20.05-14.632,21.093-26.361,14.863-35.57
					c5.686,0.428,9.894,3.426,13.056,7.767C494.168,290.648,493.626,302.62,473.036,317.638z"/>
			</g>
		</g>
		<g>
			<path style="fill:#83B832;" d="M168.479,375.355c-0.661,0-1.332-0.086-2.001-0.265C79.511,351.833,51.027,288.669,42.445,239.777
				c-9.153-52.149,1.765-98.169,2.234-100.103c1.007-4.146,5.18-6.697,9.331-5.686c4.146,1.006,6.692,5.182,5.686,9.329
				c-0.15,0.629-10.652,45.31-1.952,94.239c5.036,28.325,15.453,52.548,30.959,71.998c19.326,24.239,46.837,41.267,81.767,50.609
				c4.122,1.103,6.57,5.338,5.468,9.46C175.015,373.076,171.892,375.355,168.479,375.355z"/>
			<g>
				<path style="fill:#BDEB73;" d="M41.794,84.412c-4.01,25.172-0.107,60.053,11.273,61.866s25.93-30.128,29.94-55.3
					S78.97,56.936,67.59,55.123C56.209,53.31,45.804,59.24,41.794,84.412z"/>
			</g>
			<g>
				<path style="fill:#9AD63B;" d="M83.007,90.982c-4.01,25.17-18.555,57.107-29.938,55.29c-2.795-0.44-5.141-2.877-7.023-6.687
					c9.124-9.308,18.131-32.129,21.153-51.096c3.025-19.008-0.821-28.726-7.786-33.106c2.606-0.685,5.36-0.709,8.176-0.263
					C78.972,56.938,87.015,65.803,83.007,90.982z"/>
			</g>
			<g>
				<path style="fill:#8EC737;" d="M50.223,241.712c5.597,2.786,15.057-3.629,24.351-13.716
					c7.838-8.518,15.565-19.641,20.768-30.082c11.364-22.826,6.342-33.69-3.976-38.832c-10.025-4.989-21.364-2.723-32.429,18.37
					c-0.325,0.601-0.636,1.219-0.954,1.86C46.626,202.126,39.905,236.57,50.223,241.712z"/>
				<path style="fill:#83B832;" d="M95.341,197.914c-5.202,10.442-12.93,21.565-20.768,30.082
					c-9.294,10.087-18.754,16.502-24.351,13.716c-1.518-0.758-2.678-2.163-3.494-4.059c3.837-2.543,8.003-6.302,12.134-10.782
					c7.838-8.518,15.565-19.641,20.768-30.083c11.183-22.456,6.496-33.338-3.479-38.571c5.251-2.259,10.392-1.535,15.213,0.865
					C101.683,164.224,106.705,175.088,95.341,197.914z"/>
				<path style="fill:#83B832;" d="M50.223,241.712c5.597,2.786,15.057-3.629,24.351-13.716c-0.16-4.339-0.835-9.152-2.019-14.418
					c-2.633-11.736-7.617-24.883-13.619-36.127c-0.325,0.601-0.636,1.219-0.954,1.86C46.626,202.126,39.905,236.57,50.223,241.712z"
					/>
				<path style="fill:#BDEB73;" d="M44.039,179.814c12.988,21.932,22.188,55.804,12.272,61.676
					c-9.916,5.872-35.193-18.479-48.181-40.411s-8.767-33.14,1.149-39.012C19.195,156.194,31.052,157.882,44.039,179.814z"/>
				<path style="fill:#9AD63B;" d="M56.314,241.489c-2.498,1.476-5.968,1.042-9.972-0.794c1.763-12.675-6.063-37.06-16.195-54.168
					c-9.24-15.595-17.893-20.948-25.691-20.63c1.357-1.49,2.99-2.752,4.819-3.833c9.915-5.87,21.778-4.178,34.758,17.749
					C57.027,201.748,66.229,235.619,56.314,241.489z"/>
			</g>
			<g>
				<path style="fill:#8EC737;" d="M93.677,338.369c6.245,0.355,12.399-9.281,16.955-22.223c3.848-10.911,6.551-24.192,7.215-35.833
					c1.439-25.444-7.468-33.459-18.973-34.107c-11.194-0.63-20.72,5.93-22.559,29.691c-0.055,0.676-0.098,1.36-0.138,2.065
					C74.749,303.413,82.17,337.712,93.677,338.369z"/>
				<path style="fill:#83B832;" d="M117.847,280.312c-0.664,11.641-3.367,24.923-7.215,35.833
					c-4.556,12.942-10.711,22.578-16.955,22.223c-2.941-0.168-5.615-2.537-7.945-6.391c3.294-3.995,6.35-10.214,8.896-17.46
					c3.848-10.91,6.551-24.192,7.215-35.833c1.045-18.434-3.351-27.727-10.221-31.682c2.284-0.71,4.725-0.936,7.251-0.797
					C110.378,246.853,119.286,254.868,117.847,280.312z"/>
				<path style="fill:#83B832;" d="M93.677,338.369c6.245,0.355,12.399-9.281,16.955-22.223c-1.851-3.928-4.367-8.078-7.537-12.45
					c-7.06-9.746-16.827-19.845-26.78-27.799c-0.055,0.676-0.098,1.36-0.138,2.065C74.749,303.413,82.17,337.712,93.677,338.369z"/>
				<path style="fill:#BDEB73;" d="M63.567,283.932c20.589,15.027,42.409,42.518,35.616,51.827
					c-6.794,9.309-39.63-3.09-60.218-18.117c-20.589-15.027-21.134-26.99-14.34-36.299S42.979,268.905,63.567,283.932z"/>
				<path style="fill:#9AD63B;" d="M99.183,335.758c-2.172,2.977-7.01,3.738-13.259,2.892c0.207-11.673-18.809-34.454-36.87-47.632
					c-9.885-7.218-17.687-10.24-23.878-10.41c6.858-8.724,18.348-11.304,38.388,3.33C84.153,298.956,105.979,326.449,99.183,335.758
					z"/>
			</g>
		</g>
	</g>
	<g>
		<path style="fill:#FFB54E;" d="M356.885,340.676v65.484H162.847v-65.484c0-12.058,9.77-21.828,21.828-21.828h31.535V205.988
			l-3.574,2.393c-10.01,6.698-23.573,4.012-30.271-5.998l-24.283-36.279c-6.708-10.021-4.023-23.583,5.998-30.281l71.502-47.867
			c15.673-10.48,36.613-9.874,51.806,2.382c10.397,8.38,16.133,21.253,16.133,34.607v193.902h31.535
			C347.115,318.848,356.885,328.617,356.885,340.676z"/>
		<rect x="162.847" y="380.653" style="fill:#FF9A1B;" width="194.037" height="25.506"/>
		<path style="fill:#FF9A1B;" d="M356.885,340.676v65.484h-24.534v-65.484c0-12.048-9.78-21.828-21.828-21.828h24.534
			C347.115,318.848,356.885,328.617,356.885,340.676z"/>
		<path style="fill:#FF9A1B;" d="M303.515,125.265v193.584h-24.527V125.265c0-13.404-5.634-26.398-16.027-34.843
			c-4.682-3.796-9.906-6.486-15.363-8.08c13.404-3.918,28.324-1.306,39.901,8.08C297.893,98.868,303.515,111.862,303.515,125.265z"
			/>
	</g>
	<g>
		<circle style="fill:#8ECBFD;" cx="313.496" cy="96.874" r="70.356"/>
		<path style="fill:#65BAFC;" d="M383.854,96.87c0,38.86-31.504,70.363-70.353,70.363c-3.344,0-6.635-0.23-9.853-0.69
			c34.189-4.796,60.5-34.158,60.5-69.674c0-35.506-26.311-64.867-60.5-69.663c3.218-0.46,6.51-0.69,9.853-0.69
			C352.35,26.517,383.854,58.02,383.854,96.87z"/>
		<path style="fill:#DAEDFF;" d="M352.095,75.621h-4.812l1.837-4.446c1.63-3.944-0.245-8.462-4.189-10.092
			c-3.942-1.627-8.462,0.245-10.092,4.19l-4.276,10.347h-16.567l1.837-4.446c1.63-3.944-0.245-8.462-4.189-10.092
			c-3.943-1.627-8.461,0.245-10.092,4.19l-4.276,10.347h-12.975c-4.267,0-7.726,3.459-7.726,7.726c0,4.268,3.459,7.726,7.726,7.726
			h6.588l-4.794,11.601h-11.198c-4.267,0-7.726,3.459-7.726,7.726c0,4.268,3.459,7.726,7.726,7.726h4.812l-1.837,4.446
			c-1.63,3.944,0.245,8.462,4.189,10.092c0.965,0.398,1.965,0.588,2.948,0.588c3.034,0,5.912-1.799,7.143-4.778l4.276-10.347h16.567
			l-1.837,4.446c-1.63,3.944,0.245,8.462,4.189,10.092c0.965,0.398,1.965,0.588,2.948,0.588c3.034,0,5.912-1.799,7.143-4.778
			l4.276-10.347h12.975c4.267,0,7.726-3.459,7.726-7.726c0-4.268-3.459-7.726-7.726-7.726h-6.588l4.794-11.601h11.198
			c4.267,0,7.726-3.459,7.726-7.726C359.821,79.079,356.362,75.621,352.095,75.621z M319.383,102.674h-16.567l4.794-11.601h16.567
			L319.383,102.674z"/>
	</g>
	<g>
		<path style="fill:#FFCE8B;" d="M381.691,405.94v48.901H130.309V405.94c0-5.883,4.765-10.658,10.648-10.658h230.086
			C376.926,395.282,381.691,400.057,381.691,405.94z"/>
		<rect x="130.309" y="422.554" style="fill:#FFB54E;" width="251.382" height="32.287"/>
		<path style="fill:#FFB54E;" d="M381.691,405.939v48.903h-24.496v-48.903c0-5.879-4.771-10.65-10.65-10.65h24.496
			C376.92,395.288,381.691,400.06,381.691,405.939z"/>
		<g>
			<path style="fill:#FFE8CA;" d="M425.04,485.483H86.96c-5.882,0-10.65-4.768-10.65-10.65v-26.996c0-5.882,4.768-10.65,10.65-10.65
				H425.04c5.882,0,10.65,4.768,10.65,10.65v26.996C435.691,480.715,430.922,485.483,425.04,485.483z"/>
			<path style="fill:#FFCE8B;" d="M435.689,447.834v26.999c0,5.879-4.771,10.65-10.65,10.65h-23.516
				c5.879,0,10.65-4.771,10.65-10.65v-26.999c0-5.879-4.771-10.65-10.65-10.65h23.516
				C430.918,437.184,435.689,441.955,435.689,447.834z"/>
		</g>
	</g>
</g>
</svg>
                
 High Scores</a>
            </li>
            <li>
                <a class=" ${className} headerNav__link" href="#newplayer">
                <svg  xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 512 512" class="svg-newplayer">
       <circle style="fill:#FFD630;" cx="255.997" cy="256" r="255.997"/>
       <path style="fill:#F5BE18;" d="M512,256.863L392.858,137.72l-31.764-21.214h-54.238v16.168l194.824,195.34
           c2.178-7.397,4.013-14.964,5.504-22.647l0.229-1.09c0.344-1.835,0.688-3.669,0.975-5.504l0.172-1.09
           c0.286-1.605,0.516-3.211,0.745-4.816l0.344-2.408c0.172-1.204,0.344-2.466,0.458-3.726l0.344-3.096
           c0.115-0.975,0.229-2.006,0.286-3.039c0.115-1.319,0.229-2.58,0.344-3.898l0.172-2.408c0.115-1.376,0.172-2.752,0.286-4.186
           l0.115-2.236c0.057-1.433,0.115-2.924,0.172-4.358l0.057-1.949c0.057-1.605,0.057-3.211,0.057-4.759v-0.057L512,256.863z
            M491.302,356.969c-15.365,35.72-38.587,67.253-67.541,92.367l0,0l-1.949,1.663l-0.688,0.573c-1.204,1.032-2.409,2.064-3.669,3.039
           l-0.115,0.057l-2.178,1.777l-2.178,1.72l-2.236,1.72L410.575,460c-1.147,0.86-2.236,1.663-3.383,2.523l-1.491,1.09
           c-1.032,0.745-2.006,1.433-3.039,2.178l-1.892,1.319c-1.09,0.745-2.178,1.491-3.268,2.178l-2.293,1.548l-2.35,1.548
           c-1.032,0.63-2.064,1.319-3.096,1.949l-1.949,1.204c-1.09,0.63-2.178,1.262-3.268,1.892l-2.178,1.262
           c-1.032,0.573-2.064,1.147-3.096,1.72l-2.58,1.433c-1.032,0.573-2.121,1.147-3.153,1.663l-2.178,1.09
           c-1.262,0.63-2.465,1.262-3.726,1.835l-1.72,0.802c-1.262,0.573-2.523,1.204-3.784,1.777l-1.605,0.745
           c-1.319,0.63-2.695,1.204-4.07,1.777l-1.433,0.63c-1.491,0.63-2.982,1.204-4.472,1.835l-1.548,0.573
           c-1.548,0.63-3.153,1.204-4.702,1.777l-1.147,0.401c-1.605,0.573-3.211,1.147-4.816,1.663l-0.918,0.286
           c-1.605,0.516-3.211,1.09-4.816,1.548l-1.204,0.401c-1.605,0.516-3.268,0.975-4.931,1.433l-0.86,0.229
           c-1.777,0.516-3.612,0.975-5.446,1.491l-0.63,0.172c-1.892,0.458-3.784,0.975-5.734,1.376l-0.573,0.115
           c-1.835,0.401-3.669,0.802-5.561,1.204l-0.745,0.172c-1.777,0.344-3.612,0.688-5.446,1.032l-0.688,0.115
           c-1.835,0.344-3.669,0.63-5.561,0.918l-0.745,0.115c-2.006,0.286-3.956,0.573-5.963,0.86h-0.115h-0.057l0,0
           c-2.064,0.286-4.186,0.516-6.25,0.688l-0.344,0.057c-2.006,0.172-3.956,0.401-5.963,0.516l-0.688,0.057
           c-1.949,0.172-3.841,0.286-5.791,0.344l-0.688,0.057c-1.949,0.115-3.898,0.172-5.849,0.229h-0.63
           c-2.121,0.057-4.243,0.057-6.364,0.057h-0.057h-0.057h-0.057h-0.057h-1.777h-0.057h-0.057h-0.057h-0.057h-0.057h-0.057h-0.057
           h-0.057h-0.057h-0.057h-0.057h-0.057h-0.057h-0.057h-0.057h-0.057h-0.057h-0.057h-0.057h-0.057L126.022,385.293L115.93,361.04
           v-54.238h16.168l53.207,53.207l9.518-75.797l-78.95-79.065v-54.238l34.343-34.343h54.238l69.605,69.834l22.934-22.934
           l193.562,193.562L491.302,356.969z"/>
       <path style="fill:#FFFFFF;" d="M150.905,116.507h54.238v16.168h-54.238c-4.988,0-9.518,2.064-12.843,5.332
           c-3.268,3.325-5.332,7.855-5.332,12.843v54.238h-16.168V150.85c0-9.46,3.841-18.06,10.091-24.253
           C132.902,120.349,141.502,116.507,150.905,116.507z M306.856,116.507h54.238c9.46,0,18.06,3.841,24.253,10.091
           c6.25,6.25,10.091,14.792,10.091,24.253v54.238H379.27v-54.238c0-4.988-2.064-9.518-5.332-12.843
           c-3.325-3.268-7.855-5.332-12.843-5.332h-54.238v-16.169H306.856z M395.495,306.801v54.238c0,9.46-3.841,18.06-10.091,24.253
           c-6.25,6.25-14.792,10.091-24.253,10.091h-54.238v-16.168h54.238c4.988,0,9.518-2.064,12.843-5.332
           c3.268-3.325,5.332-7.855,5.332-12.843v-54.239H395.495z M205.201,395.441h-54.238c-9.46,0-18.06-3.841-24.253-10.091
           c-6.25-6.25-10.091-14.85-10.091-24.253v-54.238h16.168v54.238c0,4.988,2.064,9.518,5.332,12.843
           c3.325,3.268,7.855,5.332,12.843,5.332H205.2L205.201,395.441L205.201,395.441z"/>
       <path style="fill:#E84F4F;" d="M207.896,280.141h3.383l19.723-10.722l3.211-12.557c-4.702-4.759-9.518-12.786-13.99-22.647
           c-0.344,0.057-0.745,0.115-1.09,0.115c-5.217,0-10.377-5.676-11.524-12.671c-0.918-5.446,0.918-10.148,4.243-11.925
           c-4.415-22.475-7.339-56.991,31.362-65.533c23.22-5.103,31.534,12.786,32.509,14.792c14.047-7.912,22.991,3.956,25.285,10.205
           c4.129,11.295,2.81,32.337,0.688,41.625c2.35,2.236,3.497,6.25,2.695,10.779c-1.147,6.88-6.135,12.499-11.295,12.671
           c-4.129,9.117-9.69,16.856-15.308,22.533l3.211,12.557h0.286l19.15,10.722h3.669c25.285,0,45.982,19.952,45.982,44.148v35.777
           h-188.23v-35.777c0-24.31,20.698-44.148,45.982-44.148L207.896,280.141z"/>
       </svg>
       New Player</a>
            </li>
            <li>
                <a class="${className} headerNav__link" href="#howtoplay">
                <svg fill="#FFD630" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="svg-howtoplay">
                <path d="M14.09 2.233C12.95 1.411 11.518 1 9.794 1c-1.311 0-2.418.289-3.317.868C5.05 2.774 4.292 4.313 4.2 6.483h3.307c0-.633.185-1.24.553-1.828.369-.586.995-.879 1.878-.879.898 0 1.517.238 1.854.713.339.477.508 1.004.508 1.582 0 .504-.252.965-.557 1.383a2.88 2.88 0 0 1-.661.674s-1.793 1.15-2.58 2.074c-.456.535-.497 1.338-.538 2.488-.002.082.029.252.315.252h2.571c.256 0 .309-.189.312-.274.018-.418.064-.633.141-.875.144-.457.538-.855.979-1.199l.91-.627c.822-.641 1.477-1.166 1.767-1.578.494-.676.842-1.51.842-2.5-.001-1.615-.571-2.832-1.711-3.656zM9.741 14.924c-1.139-.035-2.079.754-2.115 1.99-.035 1.234.858 2.051 1.998 2.084 1.189.035 2.104-.727 2.141-1.963.034-1.236-.834-2.076-2.024-2.111z"/></svg>
                How To Play</a>
            </li>
          </ul>
        </nav>
        <div class="header-exit">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" class="svg-exit" id="svg-exit">
        <path style="fill:#9AD14B;" d="M477.261,419.64H34.738c-14.258,0-25.816-11.558-25.816-25.816v-168.28
       c0-14.258,11.558-25.816,25.816-25.816h442.523c14.258,0,25.816,11.558,25.816,25.816v168.28
       C503.077,408.082,491.519,419.64,477.261,419.64z"/>
   <circle style="fill:#F7B239;" cx="256.003" cy="114.998" r="22.64"/>
   <g>
       <path style="fill:#F2F2F2;" d="M301.3,258.454c-4.928,0-8.923,3.995-8.923,8.923v84.615c0,4.928,3.995,8.923,8.923,8.923
           s8.923-3.995,8.923-8.923v-84.615C310.223,262.449,306.228,258.454,301.3,258.454z"/>
       <path style="fill:#F2F2F2;" d="M256.921,259.98c-4.084-2.757-9.631-1.68-12.387,2.404l-21.156,31.348l-21.156-31.348
           c-2.758-4.087-8.303-5.162-12.387-2.404c-4.085,2.757-5.161,8.303-2.404,12.387l25.184,37.317l-25.184,37.317
           c-2.757,4.084-1.68,9.631,2.404,12.387c1.53,1.033,3.266,1.528,4.983,1.528c2.866,0,5.681-1.379,7.405-3.933l21.156-31.348
           l21.156,31.348c1.724,2.554,4.538,3.933,7.405,3.933c1.717,0,3.453-0.495,4.983-1.528c4.085-2.757,5.161-8.303,2.404-12.387
           l-25.184-37.317l25.184-37.317C262.084,268.283,261.007,262.737,256.921,259.98z"/>
       <path style="fill:#F2F2F2;" d="M159.174,276.3c4.928,0,8.923-3.995,8.923-8.923s-3.995-8.923-8.923-8.923h-50.041
           c-4.928,0-8.923,3.995-8.923,8.923v84.615c0,4.928,3.995,8.923,8.923,8.923h50.042c4.928,0,8.923-3.995,8.923-8.923
           s-3.995-8.923-8.923-8.923h-41.119v-23.552h16.098c4.928,0,8.923-3.995,8.923-8.923s-3.995-8.923-8.923-8.923h-16.098V276.3
           H159.174z"/>
       <path style="fill:#F2F2F2;" d="M402.866,258.454h-61.565c-4.928,0-8.923,3.995-8.923,8.923s3.995,8.923,8.923,8.923h21.86v75.692
           c0,4.928,3.995,8.923,8.923,8.923c4.928,0,8.923-3.995,8.923-8.923V276.3h21.86c4.928,0,8.923-3.995,8.923-8.923
           S407.794,258.454,402.866,258.454z"/>
   </g>
   <path style="fill:#333333;" d="M477.261,190.805H367.064l-79.76-79.76c-1.951-15.542-15.241-27.609-31.304-27.609
       c-16.064,0-29.353,12.066-31.305,27.609l-79.76,79.76H34.738C15.584,190.805,0,206.389,0,225.544v168.28
       c0,19.156,15.584,34.738,34.738,34.738h442.523c19.156,0,34.738-15.584,34.738-34.738v-168.28
       C512,206.389,496.416,190.805,477.261,190.805z M256.001,101.283c7.562,0,13.715,6.152,13.715,13.715
       c0,7.563-6.152,13.715-13.715,13.715s-13.715-6.152-13.715-13.715C242.284,107.435,248.438,101.283,256.001,101.283z
        M229.255,131.724c5.587,8.901,15.484,14.835,26.746,14.835c11.262,0,21.159-5.933,26.746-14.835l59.081,59.081H170.173
       L229.255,131.724z M494.154,393.824c0,9.315-7.578,16.893-16.893,16.893H34.738c-9.315,0-16.893-7.578-16.893-16.893v-168.28
       c0-9.315,7.578-16.893,16.893-16.893h442.523c9.315,0,16.893,7.578,16.893,16.893V393.824z"/>
   </svg>
        </div>
    </header>
        `;
    },
    renderContent: (className = "container", ...rest) => {
      return `
        <section class="${className}" id="startPage">
        </section>
      `;
    },
    renderFooter: (className = "container", ...rest) => {
        return `<footer class="${className}">
        <p>Flaggy &copy; 2022</p>
      </footer>`;
    }
  };

  export default StartPage