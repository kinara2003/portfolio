import os
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.platypus import Paragraph
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY, TA_LEFT

def generate_cv(output_path):
    width, height = A4  # 595.27 x 841.89
    c = canvas.Canvas(output_path, pagesize=A4)
    c.setTitle("Kinara Hemachandra - CV")
    c.setAuthor("Kinara Hemachandra")

    # 1. Draw Left Sidebar Background
    sidebar_width = 185
    c.setFillColor(colors.HexColor("#182848"))
    c.rect(0, 0, sidebar_width, height, fill=1, stroke=0)

    # Styles
    styles = getSampleStyleSheet()

    # --- Sidebar Elements ---
    sx = 18
    sw = sidebar_width - (sx * 2)

    # Name
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 20)
    c.drawString(sx, height - 48, "KINARA")
    c.drawString(sx, height - 70, "HEMACHANDRA")

    c.setFillColor(colors.HexColor("#8fa5c4"))
    c.setFont("Helvetica-Bold", 8)
    c.drawString(sx, height - 85, "JUNIOR BUSINESS ANALYST")

    def draw_sidebar_divider(y_pos):
        c.setStrokeColor(colors.HexColor("#2d4368"))
        c.setLineWidth(0.8)
        c.line(sx, y_pos, sx + sw, y_pos)

    def draw_sidebar_heading(y_pos, title):
        c.setFillColor(colors.white)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(sx, y_pos, title)

    # Contact
    draw_sidebar_divider(height - 100)
    draw_sidebar_heading(height - 116, "CONTACT")
    
    contact_style = ParagraphStyle(
        'SidebarContact',
        fontName='Helvetica',
        fontSize=7.8,
        leading=10.5,
        textColor=colors.HexColor("#d5e0ee")
    )
    contact_p = Paragraph("Wijayaba Place, Malabe, Sri Lanka<br/>+94 77 222 1736<br/>Kinarahemachandra2003@gmail.com", contact_style)
    cw, ch = contact_p.wrap(sw, 100)
    contact_p.drawOn(c, sx, height - 128 - ch)

    # Skills
    y_skills_top = height - 128 - ch - 14
    draw_sidebar_divider(y_skills_top)
    draw_sidebar_heading(y_skills_top - 16, "SKILLS")

    skills_list = [
        "Data analysis",
        "Stakeholder engagement",
        "Requirements gathering",
        "Customer service",
        "Multitasking",
        "Report writing",
        "Remote collaboration",
        "CRM software use",
        "Process improvement",
        "Technical troubleshooting"
    ]
    cur_y = y_skills_top - 30
    for s in skills_list:
        c.setFillColor(colors.HexColor("#d5e0ee"))
        c.setFont("Helvetica", 8)
        c.drawString(sx, cur_y, f"• {s}")
        cur_y -= 12.5

    # Education
    y_edu_top = cur_y - 6
    draw_sidebar_divider(y_edu_top)
    draw_sidebar_heading(y_edu_top - 16, "EDUCATION")

    edu_title_style = ParagraphStyle('EduTitle', fontName='Helvetica-Bold', fontSize=8, leading=9.5, textColor=colors.white)
    edu_sub_style = ParagraphStyle('EduSub', fontName='Helvetica', fontSize=7.2, leading=8.8, textColor=colors.HexColor("#c5d4e8"))
    edu_date_style = ParagraphStyle('EduDate', fontName='Helvetica', fontSize=7, leading=8.5, textColor=colors.HexColor("#9bb0cb"))

    p1 = Paragraph("BSc (Hons) Software Engineering", edu_title_style)
    p2 = Paragraph("Sri Lanka Institute of Information Technology", edu_sub_style)
    p3 = Paragraph("Jul 2023 – Present", edu_date_style)

    ey = y_edu_top - 20
    for p in [p1, p2, p3]:
        pw, ph = p.wrap(sw, 50)
        ey -= ph
        p.drawOn(c, sx, ey)
        ey -= 1.5

    ey -= 5
    p4 = Paragraph("Physical Science", edu_title_style)
    p5 = Paragraph("Cambridge International School", edu_sub_style)
    for p in [p4, p5]:
        pw, ph = p.wrap(sw, 50)
        ey -= ph
        p.drawOn(c, sx, ey)
        ey -= 1.5

    # Languages
    y_lang_top = ey - 8
    draw_sidebar_divider(y_lang_top)
    draw_sidebar_heading(y_lang_top - 15, "LANGUAGES")
    c.setFont("Helvetica", 7.8)
    c.setFillColor(colors.HexColor("#d5e0ee"))
    c.drawString(sx, y_lang_top - 28, "English — Native")

    # Links
    y_links_top = y_lang_top - 38
    draw_sidebar_divider(y_links_top)
    draw_sidebar_heading(y_links_top - 15, "LINKS")
    
    links_style = ParagraphStyle('LinksStyle', fontName='Helvetica', fontSize=7.5, leading=10, textColor=colors.HexColor("#d5e0ee"))
    p_link = Paragraph("<b>LinkedIn</b> — kinara-hemachandra<br/><b>GitHub</b> — kinara2003", links_style)
    lw, lh = p_link.wrap(sw, 50)
    p_link.drawOn(c, sx, y_links_top - 20 - lh)


    # --- Right Main Content ---
    rx = 206
    rw = width - rx - 24
    ry = height - 44

    def draw_main_heading(title, y_pos):
        c.setFillColor(colors.HexColor("#182848"))
        c.setFont("Helvetica-Bold", 10.5)
        c.drawString(rx, y_pos, title)
        c.setStrokeColor(colors.HexColor("#cbd5e1"))
        c.setLineWidth(1)
        c.line(rx, y_pos - 4, rx + rw, y_pos - 4)
        return y_pos - 16

    # 1. Professional Summary
    ry = draw_main_heading("PROFESSIONAL SUMMARY", ry)
    summary_style = ParagraphStyle(
        'Summary',
        fontName='Helvetica',
        fontSize=8,
        leading=11.2,
        alignment=TA_JUSTIFY,
        textColor=colors.HexColor("#2d3748")
    )
    sum_text = (
        "Motivated Software Engineering undergraduate with practical experience in business analysis, "
        "requirements gathering, and software documentation. Skilled in analyzing business processes, "
        "engaging stakeholders, and translating business needs into clear functional requirements for development "
        "teams. Experienced with CRM solutions, system integrations, and the software development lifecycle, backed "
        "by strong communication, analytical, and problem-solving skills. Seeking to contribute as a Junior Business "
        "Analyst bridging business objectives and technology solutions."
    )
    sum_p = Paragraph(sum_text, summary_style)
    w, h = sum_p.wrap(rw, 200)
    sum_p.drawOn(c, rx, ry - h)
    ry = ry - h - 16

    # 2. Work Experience
    ry = draw_main_heading("WORK EXPERIENCE", ry)

    # Job 1: Cloud Syntex
    job_title_style = ParagraphStyle('JobTitle', fontName='Helvetica-Bold', fontSize=9, leading=11, textColor=colors.HexColor("#0f172a"))
    job_meta_style = ParagraphStyle('JobMeta', fontName='Helvetica-Oblique', fontSize=7.6, leading=9.5, textColor=colors.HexColor("#64748b"))
    bullet_style = ParagraphStyle('JobBullet', fontName='Helvetica', fontSize=7.4, leading=9.8, textColor=colors.HexColor("#334155"))

    p_j1_title = Paragraph("<b>Business Analyst (Intern)</b> | Cloud Syntex", job_title_style)
    w, h = p_j1_title.wrap(rw, 40)
    p_j1_title.drawOn(c, rx, ry - h)
    ry -= h + 2

    p_j1_meta = Paragraph("No. 210, N. J. V. Cooray Mawatha, Rajagiriya &nbsp;&nbsp;&nbsp;&nbsp; Feb 2026 – September 2026", job_meta_style)
    w, h = p_j1_meta.wrap(rw, 30)
    p_j1_meta.drawOn(c, rx, ry - h)
    ry -= h + 4

    j1_bullets = [
        "Collaborated with clients to gather, analyze, and document business and functional requirements for CRM enhancements and new features.",
        "Prepared Business Requirement Documents (BRDs), Software Requirement Specifications (SRS), user guides, and other project documentation.",
        "Participated in client meetings, captured meeting minutes, clarified requirements, and translated business needs into actionable tasks for the development team.",
        "Worked closely with developers, UI/UX designers, and QA engineers throughout the SDLC to ensure requirements were accurately implemented.",
        "Analyzed existing CRM workflows and identified opportunities to improve usability, automation, and business processes.",
        "Documented CRM integrations, including HubSpot and Dinero, detailing integration workflows, data synchronization, and user processes.",
        "Created process flows, feature descriptions, and functional documentation to support system development and client onboarding.",
        "Assisted in backlog management by converting business requirements into clear user stories and acceptance criteria.",
        "Validated implemented features against documented requirements and coordinated with stakeholders to resolve requirement-related issues.",
        "Contributed to continuous improvement of product documentation, ensuring accuracy, consistency, and alignment with client expectations.",
        "Analyzed business processes and gathered requirements to support data-driven decision-making, improving project efficiency and stakeholder alignment."
    ]

    for b in j1_bullets:
        bp = Paragraph(f"• &nbsp;{b}", bullet_style)
        bw, bh = bp.wrap(rw, 50)
        ry -= bh
        bp.drawOn(c, rx, ry)
        ry -= 2

    ry -= 7

    # Job 2: RAR Properties
    p_j2_title = Paragraph("<b>Virtual Telecommunication Assistant</b> | RAR Properties", job_title_style)
    w, h = p_j2_title.wrap(rw, 40)
    p_j2_title.drawOn(c, rx, ry - h)
    ry -= h + 2

    p_j2_meta = Paragraph("Al Moosa Tower 1, Sheikh Zayed Road, Dubai, UAE &nbsp;&nbsp;&nbsp;&nbsp; Sep 2025 – Nov 2026", job_meta_style)
    w, h = p_j2_meta.wrap(rw, 30)
    p_j2_meta.drawOn(c, rx, ry - h)
    ry -= h + 4

    j2_bullets = [
        "Managed customer communications through phone, email, and digital platforms, addressing inquiries and ensuring professional, timely responses.",
        "Maintained and updated customer information, interaction records, and follow-up activities using CRM systems.",
        "Coordinated with internal teams and customers to resolve issues, manage requests, and improve overall communication processes."
    ]

    for b in j2_bullets:
        bp = Paragraph(f"• &nbsp;{b}", bullet_style)
        bw, bh = bp.wrap(rw, 50)
        ry -= bh
        bp.drawOn(c, rx, ry)
        ry -= 2

    ry -= 12

    # 3. Projects
    ry = draw_main_heading("PROJECTS", ry)
    proj_style = ParagraphStyle('ProjStyle', fontName='Helvetica', fontSize=7.4, leading=9.8, textColor=colors.HexColor("#334155"))

    projects = [
        "<b>Wellness Studio Management System</b> <i>(Java, MERN, HTML, CSS)</i> — Collaborated with a real-world client to build a wellness studio system with appointment scheduling, client management, and service tracking.",
        "<b>Finance Tracker</b> <i>(Kotlin, Android Studio)</i> — Finance tracking app to manage income, expenses, and categories, with realtime balance updates and basic financial insights.",
        "<b>Online Job Portal</b> <i>(JavaScript, HTML, CSS)</i> — Portal enabling employers to post vacancies and job seekers to search, apply, and manage applications efficiently.",
        "<b>Clean Water &amp; Sanitation System</b> <i>(HTML, CSS, JavaScript)</i> — System to monitor water resources, track sanitation services, and support community-level reporting.",
        "<b>Online Vehicle Spare Parts Management System</b> <i>(HTML, CSS, JavaScript)</i> — System to manage inventory, process orders, and track customer purchases efficiently."
    ]

    for proj in projects:
        pp = Paragraph(proj, proj_style)
        pw, ph = pp.wrap(rw, 60)
        ry -= ph
        pp.drawOn(c, rx, ry)
        ry -= 3.5

    c.showPage()
    c.save()
    print("CV PDF generated successfully at:", output_path)

if __name__ == "__main__":
    out_dir = r"c:\Users\kinara sadasi\Downloads\portfolio-site\portfolio\public\cv"
    os.makedirs(out_dir, exist_ok=True)
    out_file = os.path.join(out_dir, "Kinara_Hemachandra_CV.pdf")
    generate_cv(out_file)
