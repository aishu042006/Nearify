import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Plus, 
  Users, 
  Sparkles
} from 'lucide-react';

export default function TeamFinderPage({
  joinedTeamIds,
  setJoinedTeamIds,
  existingTeams,
  setExistingTeams
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTeamName, setNewTeamName] = useState('');
  const [newTeamLeader] = useState('Aishwarya G');
  const [newTeamSkills, setNewTeamSkills] = useState(['React Developer']);
  const [newTeamSlots, setNewTeamSlots] = useState(4);
  const [skillInput, setSkillInput] = useState('');

  // Handle requesting to join a team
  const toggleRequestJoin = (teamId) => {
    setJoinedTeamIds(prev => {
      const updated = new Set(prev);
      if (updated.has(teamId)) {
        updated.delete(teamId);
      } else {
        updated.add(teamId);
      }
      return updated;
    });
  };

  // Add skill to creation form
  const addSkillToNewTeam = () => {
    if (skillInput.trim() && !newTeamSkills.includes(skillInput.trim())) {
      setNewTeamSkills(prev => [...prev, skillInput.trim()]);
      setSkillInput('');
    }
  };

  // Remove skill from creation form
  const removeSkillFromNewTeam = (skillName) => {
    setNewTeamSkills(prev => prev.filter(s => s !== skillName));
  };

  // Handle Team Creation
  const handleCreateTeamSubmit = (e) => {
    e.preventDefault();
    if (!newTeamName.trim()) return;

    const newTeam = {
      id: `team-${Date.now()}`,
      name: newTeamName,
      leader: newTeamLeader,
      members: [newTeamLeader],
      skillsNeeded: newTeamSkills.length > 0 ? newTeamSkills : ['Frontend Developer'],
      openSlots: newTeamSlots - 1,
      maxSlots: newTeamSlots
    };

    setExistingTeams(prev => [newTeam, ...prev]);
    setShowCreateModal(false);
    
    // Reset form
    setNewTeamName('');
    setNewTeamSkills(['React Developer']);
    setNewTeamSlots(4);
  };

  // Filter existing teams
  const filteredTeams = existingTeams.filter(team => {
    const q = searchQuery.toLowerCase();
    return (
      team.name.toLowerCase().includes(q) ||
      team.leader.toLowerCase().includes(q) ||
      team.skillsNeeded.some(s => s.toLowerCase().includes(q))
    );
  });

  return (
    <div className="flex-grow overflow-y-auto px-4 md:px-8 py-8 max-w-5xl mx-auto w-full custom-scrollbar space-y-8 text-left bg-[#F8FAFC]">
      
      {/* HEADER CARD */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 bg-white border border-[#E2E8F0] p-6 md:p-8 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.015)] relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 via-transparent to-cyan-50/10 pointer-events-none" />
        <div className="space-y-1.5 relative z-10">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-blue-50 text-[#2563EB] rounded-lg border border-blue-100/60">
              <Users className="h-4 w-4" />
            </span>
            <span className="text-xs font-bold text-[#2563EB] tracking-wider uppercase">Matchmaking Engine</span>
          </div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Team Finder</h1>
          <p className="text-sm text-slate-500 font-medium max-w-lg">
            Form alliances, join existing teams, and invite members to hackathons or startup builds.
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="shrink-0 px-5 py-3 rounded-2xl text-xs font-black text-white bg-[#2563EB] hover:bg-blue-700 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95 relative z-10"
        >
          <Plus className="h-4 w-4 stroke-[3px]" />
          <span>Create a Team</span>
        </button>
      </div>

      {/* FILTER AND SEARCH BAR */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search teams, members, or skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#2563EB] shadow-sm transition-all"
          />
        </div>
        <div className="text-xs font-bold text-slate-400">
          Showing {filteredTeams.length} Active Teams
        </div>
      </div>

      {/* TEAMS LIST / GRID */}
      <AnimatePresence mode="popLayout">
        {filteredTeams.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="py-20 text-center bg-white border border-[#E2E8F0] rounded-[24px] shadow-sm flex flex-col items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
              <Users className="h-7 w-7 text-slate-400 stroke-[1.2]" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">No teams found</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
              We couldn't find any teams matching your search query. Try typing another skill or create your own team!
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTeams.map((team) => {
              const hasRequested = joinedTeamIds.has(team.id);
              return (
                <motion.div
                  key={team.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -12 }}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:border-slate-350 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Upper Line Info */}
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1 text-left min-w-0">
                        <h3 className="text-sm font-extrabold text-slate-800 truncate">{team.name}</h3>
                        <p className="text-[10px] text-slate-400 font-bold">Led by {team.leader}</p>
                      </div>
                      <span className={`px-2.5 py-1 rounded-xl text-[9px] font-black uppercase tracking-wider shrink-0 border ${
                        team.openSlots > 0 
                          ? 'bg-blue-50/50 border-blue-100 text-[#2563EB]'
                          : 'bg-rose-50/50 border-rose-100 text-rose-500'
                      }`}>
                        {team.openSlots > 0 ? `${team.openSlots} Slots Open` : 'Team Full'}
                      </span>
                    </div>

                    {/* Members List */}
                    <div className="space-y-2">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block text-left">Current Members</span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {team.members.map((member, index) => (
                          <span key={index} className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] text-slate-600 font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                            <span>{member}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Open slots needed skills */}
                    <div className="space-y-2">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block text-left">Target Skills Wanted</span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {team.skillsNeeded.map((skill, index) => (
                          <span key={index} className="px-2.5 py-1 bg-amber-50/50 border border-amber-100 text-amber-600 rounded-lg text-[10px] font-extrabold flex items-center gap-1">
                            <Sparkles className="h-2.5 w-2.5 text-amber-500 shrink-0" />
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Join Action button */}
                  <div className="border-t border-slate-100 pt-4 mt-5 flex items-center justify-between">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">
                      Capacity: {team.members.length} / {team.maxSlots}
                    </span>
                    <button
                      onClick={() => toggleRequestJoin(team.id)}
                      disabled={team.openSlots === 0 && !hasRequested}
                      className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer border active:scale-95 ${
                        hasRequested
                          ? 'bg-emerald-50 border-emerald-100 text-emerald-600'
                          : team.openSlots === 0
                            ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                            : 'bg-slate-900 text-white hover:bg-slate-800 border-slate-900 shadow-sm'
                      }`}
                    >
                      {hasRequested ? 'Request Sent' : 'Request Join'}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* CREATE TEAM MODAL DRAWER */}
      <AnimatePresence>
        {showCreateModal && (
          <div 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowCreateModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-[24px] border border-[#E2E8F0] w-full max-w-md p-6 relative shadow-2xl text-left space-y-5"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowCreateModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-sm p-1 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
              >
                ✕
              </button>
              <div>
                <h3 className="text-base font-extrabold text-slate-800 tracking-tight">Create a New Team</h3>
                <p className="text-xs text-slate-400 mt-0.5">Recruit members for hackathons or project development nodes.</p>
              </div>

              <form onSubmit={handleCreateTeamSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Team Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Code Commanders"
                    value={newTeamName}
                    onChange={(e) => setNewTeamName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block font-bold">Max Members Limit</label>
                  <div className="flex items-center space-x-3 text-xs font-extrabold">
                    <button
                      type="button"
                      onClick={() => setNewTeamSlots(prev => Math.max(2, prev - 1))}
                      className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-slate-700 w-16 text-center">{newTeamSlots} Members</span>
                    <button
                      type="button"
                      onClick={() => setNewTeamSlots(prev => Math.min(8, prev + 1))}
                      className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Required Skills Needed</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. Backend Developer"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addSkillToNewTeam();
                        }
                      }}
                      className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors"
                    />
                    <button
                      type="button"
                      onClick={addSkillToNewTeam}
                      className="px-3.5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      Add
                    </button>
                  </div>

                  {/* Skills tags list */}
                  <div className="flex flex-wrap gap-1.5 pt-1.5">
                    {newTeamSkills.map((skill) => (
                      <span key={skill} className="px-2 py-0.5 rounded-lg border border-slate-200 bg-slate-50 text-[10px] text-slate-600 font-bold flex items-center gap-1">
                        <span>{skill}</span>
                        <button
                          type="button"
                          onClick={() => removeSkillFromNewTeam(skill)}
                          className="text-slate-400 hover:text-slate-600 text-[8px] font-black"
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2.5 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 py-3 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl text-xs font-bold transition-all cursor-pointer text-center"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl text-xs font-black transition-all cursor-pointer text-center shadow-md active:scale-95"
                  >
                    Launch Team
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
